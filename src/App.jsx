import "./App.css";
import { useState } from "react";
import Form from "./assets/components/pages/formulario/Form";
import Pedido from "./assets/components/pages/pedido/Pedido";

function App() {
  const [elPedido, setElPedido] = useState();

  function handleSubmit(pedido) {
    setElPedido(pedido);
  }

  function handleDelete() {
    console.log("borrando")
    setElPedido();
  }

  return (
    <>
      <Form onPedido={handleSubmit} />

      {elPedido ? <Pedido onDelete={handleDelete}> {elPedido}</Pedido>
       : undefined}
    </>
  );
}

export default App;
