import { Container } from "react-bootstrap";

import { useEffect, useState } from "react";

import AgregarTarea from "./AgregarTarea";
import Tareas from "./Tareas";
import { consultarApi } from "./helpers/queries";

const Home = () => {
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
          <AgregarTarea setTarea={setTarea} />
          <hr />
         <Tareas tarea={tarea} setTarea={setTarea} />
        </Container>
        </section>
    );
};

export default Home;