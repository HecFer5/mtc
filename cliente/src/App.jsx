import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tareas from "./paginas/tareas";
import FormularioTareas from "./paginas/FormularioTareas";
import NoEncontrado from "./paginas/NoEncontrado";
import NavBar from "./componentes/NavBar";
import TablaMeridianos from "./paginas/TablaMeridianos";
import './index.css'
import FichaMeridiano from "./paginas/FichaMeridiano";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Tareas />} />
        <Route path="/nuevatarea" element={<FormularioTareas />} />
        <Route path="/tablameridianos" element={<TablaMeridianos />} />
        <Route path="/fichameridiano/:idmeridiano" element={<FichaMeridiano />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </>
  );
}

export default App;
