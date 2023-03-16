import React, { Suspense } from "react";
import Coins from "./Coins";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

function SuspenseOne() {
  return (
    <div className="my-4">
      <Container>
        <Card>
          <Card.Header>Suspense on the server in React18</Card.Header>
          <Card.Body>
            <Suspense fallback={<h3>Loading...</h3>}>
              <Card.Title>Coins List</Card.Title>
              <Coins />
            </Suspense>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default SuspenseOne;
