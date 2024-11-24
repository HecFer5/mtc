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
  <div className="w-full bg-white border border-black rounded shadow p-5 mt-14">

    {registros.length > 0 ? (
      <>
        <h2 className="text-xl font-bold text-center mt-4 mb-4">
          Meridiano de {registros[0].nombremeridiano}
        </h2>

        <div className="overflow-y-auto max-h-[400px]">
          <table className="min-w-full mt-4">
          <thead className="sticky top-0 bg-white z-10">
          <tr>
          <th style={{ backgroundColor: '#83d9c3' }} className="border  px-2 py-2">Punto</th>
          <th style={{ backgroundColor: '#55ab97' }} className="border  px-2 py-2" colSpan='4'>Nombres</th>
          <th style={{ backgroundColor: '#83d9c3' }} className="border  px-2 py-2" colSpan='3'>Naturaleza</th>

            
              </tr>
            </thead>
            <tbody>
              {registros.map((registro) => (
                <tr key={registro.idpuntos}>
                  <td className="border px-4 py-2 bg-green-100">{registro.punto}</td>
                  <td className="border px-4 py-2 bg-green-200">{`${registro.nombre}`}</td>
                  <td className="border px-4 py-2 bg-green-200">{`${registro.nombrech} o ${registro.nombrepy}`}</td>
                  <td className="border px-4 py-2 bg-green-200">
                    {registro && registro.nombre2 ? `${registro.nombre2}` : ""}
                  </td>
                  <td className="border px-4 py-2 bg-green-200">
                    {registro && (registro.nombre2 || registro.nombrech2 || registro.nombrepy2)
                      ? ` ${registro.nombrech2} ${registro.nombrepy2}`
                      : ""}
                  </td>
                  <td className="border px-4 py-2 bg-green-100">
                    {registro.naturaleza1 !== '' ? registro.naturaleza1 : ""}
                  </td>
                  <td className="border px-4 py-2 bg-green-100">
                    {registro.naturaleza2 !== '' ? registro.naturaleza2 : ""}
                  </td>
                  <td className="border px-4 py-2 bg-green-100">
                    {registro.naturaleza3 !== '' ? registro.naturaleza3 : " "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ) : (
      <div>Cargando o no hay datos disponibles...</div>
    )}
    <div className="flex mt-4">
      <li style={{ backgroundColor: '#55ab97' }} className="block bg-blue-700 mt-3 px-2 py-1 text-black text-center rounded-md w-full">
        <Link to={"/tablameridianos/"}>Volver</Link>
      </li>
    </div>
  </div>
</div>
  );
};

export default FichaMeridiano;
