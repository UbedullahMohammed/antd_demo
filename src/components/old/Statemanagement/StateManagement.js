import React, { useReducer } from "react";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";
// import CounterOne from "./Components/CounterOne";
// import CounterThree from "./Components/CounterThree";
// import CounterTwo from "./Components/CounterTwo";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const StateManagement = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="my-4">
        <Container>
          <Card>
            <Card.Header>
              Global State Management with useReducer and useContext Hook in
              React18
            </Card.Header>
            <Card.Body>
              <Card.Title>Count: {count}</Card.Title>
              {/* <CounterOne /> */}
              {/* <CounterTwo /> */}
              {/* <CounterThree /> */}
              <ComponentA />
              <ComponentB />
              <ComponentC />
            </Card.Body>
          </Card>
        </Container>
      </div>
    </CountContext.Provider>
  );
};

export default StateManagement;
