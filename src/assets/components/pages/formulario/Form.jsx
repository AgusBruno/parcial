import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import "./Form.css"

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [mensaje, setMensaje] = useState("");

  function validacion(event) {
    event.preventDefault();
    if (nombre.trim() !== "" && nombre.length>3) {
      props.onDatos(nombre);
      setMensaje("");
    } else {
      setMensaje("Debe ingresar un nombre mayor a 3 caracteres");
    }
    if (marca.trim() !== "" && marca.length>6) {
      props.onDatos(marca);
      setMensaje("");
    } else {
      setMensaje("Debe ingresar una marca mayor a 6 caracteres");
    }

  }

  return (
    <div>
      <Typography color="primary" variant="h4">Bienvenidos tu nombre y marca preferida</Typography>
    <form
    className="form-container" 
    onSubmit={validacion}>
      <label htmlFor="onDatos"></label>
      <TextField
        type="text"
        id="nombre"
        label="Ingresa tu nombre"
        variant="outlined"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <TextField
        type="text"
        id="marca"
        label="Ingresa tu marca"
        variant="outlined"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      />
      
      {mensaje ? <p>{mensaje}</p> : null}

      <button type="submit">Enviar Datos</button>
    </form>
    </div>
  );
};

export default Form;
