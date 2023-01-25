import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { consultarApi, deleteTareaApi } from "./helpers/queries";

const Items = ({ tarea, setTarea }) => {
  const borrarTarea = (()=>{
 deleteTareaApi(tarea.id).then((respuesta)=>{
consultarApi().then((respuesta)=>{
setTarea(respuesta)
})
 })
  });
  return (
    <ListGroup.Item className="d-flex justify-content-between m-1">
      {tarea.nombre}
      <div>
        <Button className="mx-2" variant="warning">
          Editar
        </Button>
        <Button variant="danger" onClick={borrarTarea}>Borrar</Button>
      </div>
    </ListGroup.Item>
  );
};

export default Items;
