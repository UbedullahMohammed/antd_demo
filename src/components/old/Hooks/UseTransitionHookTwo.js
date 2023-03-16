import React, { useState, useTransition } from "react";
import Container from "react-bootstrap/Container";
import { Button, Card } from "react-bootstrap";

function UseTransitionHookTwo() {
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);

  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      setShowCounter((prev) => !prev);
    });
    setCount((prevCount) => prevCount + 1);
  };

  console.log("Rendered", { count });

  return (
    <div className="my-4">
      <Container>
        <Card>
          <Card.Header>UseTransition Hook Ex-2 in React18</Card.Header>
          <Card.Body>
            <Button variant="primary" onClick={onClick}>
              Click Me
            </Button>
            {isPending && <h3>Loading...</h3>}
            {showCounter && <div>{count}</div>}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default UseTransitionHookTwo;
