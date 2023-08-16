import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import "./Form.css"

const Form = (props) => {
  const [pedido, setPedido] = useState("");
  const [mensaje, setMensaje] = useState("");

  function validacion(event) {
    event.preventDefault();
    if (pedido.trim() !== "") {
      props.onPedido(pedido);
      setMensaje("");
    } else {
      setMensaje("Debe ingresar un pedido");
    }
  }
  return (
    <div>
      <Typography color="primary" variant="h4">Bienvenidos a pedidos ya</Typography>
    <form
    className="form-container" 
    onSubmit={validacion}>
      <label htmlFor="pedido"></label>
      <TextField
        type="text"
        id="pedido"
        label="Ingresa tu pedido"
        variant="outlined"
        value={pedido}
        onChange={(e) => setPedido(e.target.value)}
      />
      {mensaje ? <p>{mensaje}</p> : null}
      <button type="submit">Enviar Pedido</button>
    </form>
    </div>
  );
};

export default Form;
