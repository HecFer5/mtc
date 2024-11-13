import axios from 'axios'

// export const crearTarea = async (tarea) =>
//     await axios.post('http://localhost:4000/MERIDIANO', tarea)


export const ListarMeridianos = async () =>
    await axios.get("http://localhost:4000/meridiano");