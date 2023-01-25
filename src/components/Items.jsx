import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { consultarApi, deleteTareaApi } from "./helpers/queries";
import Swal from "sweetalert2";

const Items = ({ tarea, setTarea }) => {
  const borrarTarea = (()=>{
 deleteTareaApi(tarea.id).then((respuesta)=>{
  Swal.fire({
    title: '¿Estas Seguro?',
    text: "Una vez eliminado no podras recuperarlo",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Si, Eliminar!',
    cancelButtonText: 'Mejor NO'
  }).then((result) => {
    if (result.isConfirmed) {
      consultarApi().then((respuesta)=>{
        setTarea(respuesta)
        })
      Swal.fire(
        '¡Eliminado!',
        'Tarea Eliminada',
        'success'
      )
    }
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
