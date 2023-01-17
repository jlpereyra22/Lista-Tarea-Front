import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AgregarTarea = () => {
    return (
      
        <Form className="b-5 row">
        <Form.Group className="mb-3" controlId="agregarTarea">
          <Form.Label>Ingrese su tarea</Form.Label>
          <Form.Control type="text" placeholder="Tarea....." />
          <Form.Text className="text-muted">
            Agrege la tarea que desea programar.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
      
    );
};

export default AgregarTarea;