import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const FichaMeridiano = () => {
  const [registros, setRegistros] = useState([]);
  const params = useParams();

  useEffect(() => {
    const traerTarea = async () => {
      if (params.idmeridiano) {
        console.log("ID del meridiano:", params.idmeridiano);
        const url = "http://localhost:4000/puntos/" + params.idmeridiano;
        try {
          const response = await axios.get(url);
          if (Array.isArray(response.data) && response.data.length > 0) {
            setRegistros(response.data);
          } else {
            setRegistros([]);
          }
        } catch (error) {
          console.error("Error al traer la tarea:", error);
          setRegistros([]);
        }
      }
    };
    traerTarea();
  }, [params.idmeridiano]);

  return (
    <div className="justify-center flex">
      <div className="w-full  bg-white border border-black rounded shadow p-5 mt-14">
        <div>{`Número de orden: ${params.idmeridiano}`}</div>
        {registros.length > 0 ? (
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Punto</th>
                <th className="border px-4 py-2 " colSpan="4">Nombres</th>
                <th className="border px-4 py-2" colSpan="3">Naturaleza</th>

              </tr>
            </thead>
            <tbody>
              {registros.map((registro) => (
                <tr key={registro.idpuntos}>
                  <td className="border px-4 py-2">{registro.punto}</td>
                  <td className="border px-4 py-2">{`${registro.nombre}`}</td>
                  <td className="border px-4 py-2">{`${registro.nombrech} o ${registro.nombrepy}`}</td>
                  <td className="border px-4 py-2">
                    {registro &&
                    ( registro.nombre2)
                      ? `${registro.nombre2}`
                      : ""}
                  </td>
                  <td className="border px-4 py-2">
                    {registro &&
                    (registro.nombre2 ||
                      registro.nombrech2 ||
                      registro.nombrepy2)
                      ? ` ${registro.nombrech2}   ${registro.nombrepy2}`
                      : ""}
                  </td>
                  <td className="border px-4 py-2">
                    {registro.naturaleza1 != ''
                      ? registro.naturaleza1
                      : ""}
                  </td>
                  <td className="border px-4 py-2">
                    {registro.naturaleza2 != ''
                      ? registro.naturaleza2
                      : ""}
                  </td>
                  <td className="border px-4 py-2">
                    {registro.naturaleza3 != ''
                      ? registro.naturaleza3
                      : " "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Cargando o no hay datos disponibles...</div>
        )}
        <div className="flex mt-4">
          <li className="block bg-blue-700 mt-3 px-2 py-1 text-white text-center rounded-md w-full">
            <Link to={"/tablameridianos/"}>Volver</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default FichaMeridiano;
