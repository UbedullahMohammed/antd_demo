import React, { useContext } from "react";
import { CountContext } from "../StateManagement";
import Button from "react-bootstrap/Button";

const ComponentF = () => {
  const countContext = useContext(CountContext);

  return (
    <div>
      Component F - {countContext.countState}
      <Button
        variant="secondary"
        className="m-2"
        onClick={() => countContext.countDispatch("increment")}
      >
        Increment
      </Button>
      <Button
        variant="secondary"
        className="m-2"
        onClick={() => countContext.countDispatch("decrement")}
      >
        Decrement
      </Button>
      <Button
        variant="secondary"
        className="m-2"
        onClick={() => countContext.countDispatch("reset")}
      >
        Reset
      </Button>
    </div>
  );
};

export default ComponentF;
