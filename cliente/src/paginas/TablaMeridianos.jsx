import axios from "axios";
// import { isPromise } from 'formik'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const TablaMeridianos = () => {
  const [registros, setRegistros] = useState([]);

  const [busqueda, setBusqueda] = useState(""); // <-- nuevo estado para búsqueda

  const navigate = useNavigate();

  const ListarMeridianos = async () =>
    await axios.get("http://localhost:4000/meridiano").then((response) => {
      const data = response.data;
      setRegistros(data);
    });

  useEffect(() => {
    ListarMeridianos();
  }, []);

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
                      <th scope="col" className="px-6 py-4 text-red-500">
                        TIPO
                      </th>
                      <th scope="col" className="px-6 py-4">
                        <div className="flex flex-col items-start">
                          <span>MERIDIANO</span>
                          <div className="flex space-x-2 mt-1">
                            <button
                              onClick={() =>
                                handleSort("nombremeridiano", "asc")
                              }
                              className="text-blue-500 hover:text-blue-700"
                            >
                              ▲
                            </button>
                            <button
                              onClick={() =>
                                handleSort("nombremeridiano", "desc")
                              }
                              className="text-blue-500 hover:text-blue-700"
                            >
                              ▼
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
                      <th scope="col" className="px-6 py-4">
                        RELACION VERTICAL
                      </th>
                      <th scope="col" className="px-6 py-4">
                        PUNTOS
                      </th>
                      <th scope="col" className="px-6 py-4">
                        SOPLO
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
