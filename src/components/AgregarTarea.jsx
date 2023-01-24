import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { agregarTareaApi } from './helpers/queries';

const AgregarTarea = () => {
  const{register, handleSubmit,formState:{errors}}=useForm();
  const onSubmit=(datos)=>{
    console.log(datos);
    agregarTareaApi(datos).then((respuesta)=>{
      window.location.reload(true)
    });
   
  };
    return (
      
        <Form className="b-5 row" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="agregarTarea">
          <Form.Label>Ingrese su tarea</Form.Label>
          <Form.Control type="text" 
          placeholder="Tarea..." 
          {...register("nombre",{
            required:"Debe ingresar una tarea", 
            minLength:{
              value:2,
              message:"La tarea debe contar como minimo con dos caracteres"
            },
            maxLength:{
              value:100,
              message:"La tarea no debe superar los 100 caracteres"
            }
          })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
      
    );
};

export default AgregarTarea;