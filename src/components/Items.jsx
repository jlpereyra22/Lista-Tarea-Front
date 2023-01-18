import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";

const Items = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between m-1">Cras justo odio
        <div><Button className='mx-2' variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        </div>
    </ListGroup.Item>
  );
};

export default Items;
