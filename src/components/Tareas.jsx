
import ListGroup from 'react-bootstrap/ListGroup';
import Items from "./Items";



const Tareas = ({tarea, setTarea}) => {
     
    return (
        <ListGroup>
         
         {tarea.map((tarea,index)=><Items key={index} tarea={tarea} setTarea={setTarea}/>)}
        
      </ListGroup>
    );
};

export default Tareas;