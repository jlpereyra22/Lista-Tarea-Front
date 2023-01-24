import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css"
import { Container } from "react-bootstrap";
import AgregarTarea from "./components/AgregarTarea";
import Tareas from "./components/Tareas";
import { useEffect, useState } from "react";
import { consultarApi } from "./components/helpers/queries";


function App() {
  const [tarea, setTarea] = useState([]);
  useEffect(()=>{
    consultarApi().then((respuesta)=>{
      console.log(respuesta);
      setTarea(respuesta);
    });
  },[]);
  return (
    <section className="bg-color">
    <Container className="py-5">
      <section>
        <h1>LISTA DE TAREAS</h1>
        <hr />
      </section>
      <AgregarTarea />
      <hr />
     <Tareas tarea={tarea} />
    </Container>
    </section>
  );
}

export default App;
