import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css"
import { Container } from "react-bootstrap";
import AgregarTarea from "./components/AgregarTarea";

function App() {
  return (
    <section className="bg-color">
    <Container className="py-5">
      <section>
        <h1>LISTA DE TAREAS</h1>
        <hr />
      </section>
      <AgregarTarea />
    </Container>
    </section>
  );
}

export default App;
