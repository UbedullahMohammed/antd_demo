import { useState } from "react";
import List from "./List";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

const UseDeferredValueHook = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="my-4">
      <Container>
        <Card>
          <Card.Header>UseTransition Hook in React18</Card.Header>
          <Card.Body>
            <Card.Title>Search Form</Card.Title>
            <Form.Control
              size="lg"
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="Search text"
            />
            <List input={input} />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default UseDeferredValueHook;
