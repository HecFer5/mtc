import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FichaMeridiano from "./FichaMeridiano";

const TablaMeridianos = () => {
  const [registros, setRegistros] = useState([]);
  const [ordenAscendente, setOrdenAscendente] = useState(true);
  const [ordenSoplo, setOrdenSoplo] = useState(true);
  const [ordenTipo, setOrdenTipo] = useState(true);
  const [ordenPuntos, setOrdenPuntos] = useState(true);

  const navigate = useNavigate();

  const ListarMeridianos = async () =>
    await axios.get("http://localhost:4000/meridianoasc").then((response) => {
      const data = response.data;
      setRegistros(data);
    });

  useEffect(() => {
    ListarMeridianos();
  }, []);

  const OrdenMeridianos = async () => {
    try {
      if (ordenAscendente) {
        const response = await axios.get("http://localhost:4000/meridianodesc");
        const data = response.data;
        setRegistros(data);
        console.log("Ordenando de manera descendente");
      } else {
        const response = await axios.get("http://localhost:4000/meridianoasc");
        const data = response.data;
        setRegistros(data);
        console.log("Ordenando de manera ascendente");
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setOrdenAscendente(!ordenAscendente);
    }
  };

  const OrdenSoplo = async () => {
    try {
      if (ordenSoplo) {
        const response = await axios.get("http://localhost:4000/soplodesc");
        const data = response.data;
        setRegistros(data);
        console.log("Ordenando de manera descendente");
      } else {
        const response = await axios.get("http://localhost:4000/soploasc");
        const data = response.data;
        setRegistros(data);
        console.log("Ordenando de manera ascendente");
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setOrdenSoplo(!ordenSoplo);
    }
  };

  const OrdenTipo = async () => {
    try {
      if (ordenTipo) {
        const response = await axios.get("http://localhost:4000/tipodesc");
        const data = response.data;
        setRegistros(data);
        console.log("Ordenando de manera descendente");
      } else {
        const response = await axios.get("http://localhost:4000/tipoasc");
        const data = response.data;
        setRegistros(data);
        console.log("Ordenando de manera ascendente");
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setOrdenTipo(!ordenTipo);
    }
  };

  const OrdenPuntos = async () => {
    try {
      if (ordenPuntos) {
        const response = await axios.get("http://localhost:4000/puntosdesc");
        const data = response.data;
        setRegistros(data);
        console.log("Ordenando de manera descendente");
      } else {
        const response = await axios.get("http://localhost:4000/puntosasc");
        const data = response.data;
        setRegistros(data);
        console.log("Ordenando de manera ascendente");
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setOrdenPuntos(!ordenPuntos);
    }
  };


  return (
    <>
      <div className="mt-16">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="ml-4 inline-block py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden max-h-[500px] overflow-y-auto">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b bg-gray-400 font-medium dark:border-neutral-500 dark:bg-neutral-600 sticky top-0 z-10">
                    <tr>
                    <th scope="col" className="px-6 py-4">
                        <div className="flex flex-col items-start">
                          <div className="flex space-x-2 mt-1">
                            <button
                              onClick={() => OrdenTipo()}
                              className="text-black hover:text-blue-700 underline"
                            >
                              TIPO 
                            </button>
                          </div>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-4">
                        <div className="flex flex-col items-start">
                          <div className="flex space-x-2 mt-1">
                            <button
                              onClick={() => OrdenMeridianos()}
                              className="text-black hover:text-blue-700 underline"
                            >
                              MERIDIANO
                            </button>
                          </div>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-4">
                        EN CHINO
                      </th>
                      <th scope="col" className="px-6 py-4">
                        NOM.
                      </th>
                      <th scope="col" className="px-6 py-4 text-grey-500">
                        RELACION VERTICAL
                      </th>
                      <th scope="col" className="px-6 py-4">
                        <div className="flex flex-col items-start">
                          <div className="flex space-x-2 mt-1">
                          <button
                          onClick={() => OrdenPuntos()}
                          className="text-black hover:text-blue-700 underline"
                        >
                          PUNTOS
                        </button>
                          </div>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-4">
                        <button
                          onClick={() => OrdenSoplo()}
                          className="text-black hover:text-blue-700 underline"
                        >
                          SOPLO
                        </button>
                      </th>
                      <th scope="col" className="px-6 py-4"></th>
                      <th scope="col" className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {registros.map(
                      (registro, index) =>
                        registro.idmeridiano !== 33 && (
                          <tr
                            key={registro.idmeridiano}
                            className={`border-e-4 ${
                              index % 2 === 0 ? "bg-neutral-100" : "bg-gray-200"
                            } dark:border-neutral-500`}
                          >
                            <td>
                              <li className="block bg-white font-semibold ml-4 px-2 py-1 text-black w-min rounded-md">
                                <Link
                                  to={
                                    "/registroespacientes/" +
                                    registro.idmeridiano
                                  }
                                >
                                  {registro.tipo || ""}
                                </Link>
                              </li>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold">
                              {registro.otronombre !== ""
                                ? `${registro.nombremeridiano} o ${registro.otronombre}`
                                : registro.nombremeridiano || ""}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold">
                              {registro.nobrechino && registro.nombrepy
                                ? `${registro.nobrechino} - ${registro.nombrepy}`
                                : registro.nobrechino ||
                                  registro.nombrepy ||
                                  ""}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold">
                              {registro.letra || ""}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold">
                              {registro.relacionvertical && registro.relacionvch
                                ? `${registro.relacionvertical} - ${registro.relacionvch}`
                                : registro.relacionvertical ||
                                  registro.relacionvch ||
                                  ""}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold">
                              {registro.puntos || ""}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold">
                              {registro.soplo || ""}
                            </td>
                            <td>
                          <button
                       className="block bg-blue-300 font-semibold ml-4 px-2 py-1 text-black w-min rounded-md"
                       onClick={() => navigate(`/fichameridiano/${registro.idmeridiano}`)}
                          >
                            Editar
                          </button>
                        </td>

                          </tr>
                        )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablaMeridianos;
