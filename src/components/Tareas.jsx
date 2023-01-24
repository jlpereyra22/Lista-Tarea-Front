
import ListGroup from 'react-bootstrap/ListGroup';
import Items from "./Items";



const Tareas = (props) => {
     
    return (
        <ListGroup>
         
         {props.tarea.map((tarea,index)=><Items key={index} tarea={tarea}/>)}
        
      </ListGroup>
    );
};

export default Tareas;