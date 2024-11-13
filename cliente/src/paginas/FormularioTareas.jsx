import React from "react";
import { Form, Formik } from "formik";
// import { crearTarea } from "../api/tareas.api.jsx";

function FormularioTareas() {
  return (
    <div>
      <Formik
        initialValues={{
          comun: " ",
          cientifico: " ",
          descripcion: " ",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await crearTarea(values);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Nombre Común</label>
            <input type="text" name="comun" onChange={handleChange} />
            <label>Nombre Científico</label>
            <input type="text" name="cientifico" onChange={handleChange} />
            <label>Descripción</label>
            <textarea
              name="descripcion"
              rows={3}
              placeholder="Ingrese la descripción"
              onChange={handleChange}
            ></textarea>
            <button type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormularioTareas;
