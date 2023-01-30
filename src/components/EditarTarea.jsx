import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import { editarTareaApi, obtenerTareaApi } from "./helpers/queries";

const EditarTarea = () => {
  useEffect(() => {
    obtenerTareaApi(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setValue("nombre", respuesta.dato.nombre);
      } else {
      }
    });
  }, []);
  const onSubmit = (item) => {
    console.log(item);
    editarTareaApi(id, item).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Tarea Modificada",
          "La Tarea fue Modificada con Exito",
          "success"
        );
        navegacion("/");
      } else {
        Swal.fire("Ocurrio un Error", "Intente mas Tarde", "error");
      }
    });
  };
const navegacion = useNavigate();
  const { id } = useParams();
  console.log(id);
  const {
    register,
handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      nombre: "",
    },
  });
  return (
    <section className="bg-color">
      <Container className="py-5">
        <h1>LISTA DE TAREAS</h1>
        <div>
          <h2>Modifique su Tarea</h2>
        </div>
        <Form className="b-5 row" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="agregarTarea">
            <Form.Label>Ingrese su tarea</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tarea..."
              {...register("nombre", {
                required: "Debe ingresar una tarea",
                minLength: {
                  value: 2,
                  message:
                    "La tarea debe contar como minimo con dos caracteres",
                },
                maxLength: {
                  value: 100,
                  message: "La tarea no debe superar los 100 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Editar
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default EditarTarea;
