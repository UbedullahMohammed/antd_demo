import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

const BadStopwatch = () => {
  // console.count("Badstopwatch useEffect");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);

  return <div>Bad Stopwatch: {count}</div>;
};

const GoodStopwatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Good Stopwatch: {count}</div>;
};

const useEffectHook = () => {
  return (
    <div className="my-4">
      <Container>
        <Card>
          <Card.Header>UseEffect Hook in React18</Card.Header>
          <Card.Body>
            <Card.Title>Example</Card.Title>
            <BadStopwatch />
            <GoodStopwatch />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default useEffectHook;
