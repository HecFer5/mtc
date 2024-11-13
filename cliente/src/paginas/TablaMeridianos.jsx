import axios from "axios";
// import { isPromise } from 'formik'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const TablaMeridianos = () => {
  const [registros, setRegistros] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [abierto, setAbierto] = useState(false);
//   const [nuevoRegistroId, setNuevoRegistroId] = useState(null);
  const [busqueda, setBusqueda] = useState(""); // <-- nuevo estado para búsqueda

//   const xLink = "md:ml-8 md:my-0 my-7 font-semibold";
  const navigate = useNavigate();

  const ListarMeridianos = async () =>
    await axios.get("http://localhost:4000/meridiano").then((response) => {
      const data = response.data;
      setRegistros(data);
    });

  useEffect(() => {
    ListarMeridianos();
  }, []);

//   const refEstatus = 1;
//   const irAlerta = (idpaciente) => {
//     navigate("/borrar/" + idpaciente, { state: { refEstatus } });
//   };

//   const registrosFiltrados = registros
//     .filter((registro) => registro.idpaciente !== 33)
//     .filter((registro) =>
//       `${registro.nombre} ${registro.apellido}`
//         .toLowerCase()
//         .includes(busqueda.toLowerCase())
//     ); // <-- filtrar por búsqueda
//   const [task, setTask] = useState([]);

//   const verificaTurnos = async (idpaciente) => {
//     const respuesta = await axios.get(
//       "http://localhost:4000/sesiones/" + idpaciente
//     );
//     const taskData = respuesta.data;
//     setTask(() => ({
//       nombre: taskData.nombre,
//       apellido: taskData.apellido,
//       telefono: taskData.telefono,
//       imagen: taskData.imagen,
//       calle: taskData.calle,
//       numero: taskData.numero,
//       patologia: taskData.patologia,
//       patasoc: taskData.patasoc,
//       fechacirugia: taskData.fechacirugia,
//       mutualid: taskData.mutualid,
//       afiliado: taskData.afiliado,
//       idpaciente: taskData.idpaciente,
//       cantidad: taskData.cantidad,
//       usadas: taskData.usadas,
//       tanda: taskData.tanda ?? defaultValue,
//       estado: taskData.estado,
//     }));

//     console.log("taskData", taskData);

//     if (taskData.mutualid != 2) {
//       console.log("con mutual");
//       if (taskData.tanda === 0 && taskData.estado === 0) {
//         navigate("/sinturno/" + idpaciente, { state: taskData });
//       }

//       if (taskData.usadas === taskData.cantidad && taskData.estado === 0) {
//         navigate("/sinturno/" + idpaciente, { state: taskData });
//       }
//       if (taskData.estado === 1 && taskData.usadas === taskData.cantidad) {
//         navigate("/turno/" + idpaciente, { state: taskData });
//       }

//       if (taskData.estado === 0 && taskData.usadas != taskData.cantidad) {
//         navigate("/turno/" + idpaciente, { state: taskData });
//       }
//     } else {
//       console.log("privado");
//       navigate("/turno/" + idpaciente, { state: taskData });
//     }
//   };


  
//   const enviarMensajeWhatsApp = (numero) => {
//     const url = `https://web.whatsapp.com/send?phone=${numero}`;
//     window.open(url, "whatsappWindow");
// };

  return (
    <>
     <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="ml-20 inline-block  py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <div
                  className="text-2xl text-white text-center font-bold bg-blue-500
                 mb-10  max-w-md px-4 py-2 mt-5 ml-5"
                >
                  LISTADO MUTUALES
                </div>
                <div
                  className="text-1xl text-black text-center bg-blue-200
                 mb-10  max-w-md px-4 py-2 mt-5 ml-5"
                >
                  Click sobre Nº para ver pacientes de cada mutual
                </div>
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b bg-gray-400 font-medium dark:border-neutral-500 dark:bg-neutral-600">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Nº
                      </th>
                      <th scope="col" className="px-6 py-4">
                        NOMBRE
                      </th>
                      <th scope="col" className="px-6 py-4">
                        AFILIADOS
                      </th>
                      <th scope="col" className="px-6 py-4">
                        VALOR BONO
                      </th>
                      <th scope="col" className="px-6 py-4">
                        A COBRAR
                      </th>
                      <th scope="col" className="px-6 py-4"></th>
                      <th scope="col" className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {registros.map(
                      (registro) =>
                        registro.idmeridiano !== 33 && (
                          <tr
                            key={registro.idmeridiano}
                            className="border-e-4 bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                          >
                            <td>
                              <li className="block bg-white font-semibold ml-4 px-2 py-1 text-black w-min rounded-md">
                                <Link
                                  to={"/registroespacientes/" + registro.idmeridiano}
                                >
                                  {" "}
                                  {registro.idmeridiano}
                                </Link>
                              </li>
                            </td>

                            <td className="whitespace-nowrap px-6 py-4 font-bold">{`${registro.nombremeridiano}`}</td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold">{`${registro.cantidad_pacientes}`}</td>
                          
                  
                          </tr>
                        )
                    )}
                  </tbody>
           
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default TablaMeridianos;