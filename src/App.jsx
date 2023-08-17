import "./App.css";
import { useState } from "react";
import Form from "./assets/components/pages/formulario/Form";
import Card from "./assets/components/pages/card/Card";


function App() {
  const [datosNombre, setDatosNombre] = useState();
  const [datosMarca, setDatosMarca] = useState();

  function handleSubmit(nombre, marca) {
    setDatosNombre(nombre);
    setDatosMarca(marca)
  }



  return (
    <>
      <Form onDatos={handleSubmit(datosNombre, datosMarca)} />
      <Card datos={datosNombre} marca={datosMarca} />

     
    </>
  );
}

export default App;
