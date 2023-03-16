import { useId } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PersonForm = () => {
  const id = useId();
  return (
    <div>
      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label htmlFor={id + "firstName"}>Firstname</Form.Label>
          <Form.Control
            id={id + "firstName"}
            type="text"
            placeholder="Firstname"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={id + "lastName"}>Lastname</Form.Label>
          <Form.Control
            id={id + "lastName"}
            type="text"
            placeholder="Lastname"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PersonForm;
