import React from "react";
import PersonForm from "./PersonForm";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

const UseidHook = () => {
  return (
    <div className="my-4">
      <Container>
        <Card>
          <Card.Header>UseID Hook in React18</Card.Header>
          <Card.Body>
            <Card.Title>Form 1</Card.Title>
            <PersonForm />
            <Card.Title>Form 2</Card.Title>
            <PersonForm />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default UseidHook;
