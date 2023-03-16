import React, { useState, useTransition } from "react";

function TransitionOne() {
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
    <div>
      <button onClick={onClick}>Click Me</button>
      {isPending && <h3>Loading...</h3>}
      {showCounter && <div>{count}</div>}
    </div>
  );
}

export default TransitionOne;
