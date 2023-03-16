import { useMemo, useDeferredValue, useEffect } from "react";

const List = ({ input }) => {
  const deferredValue = useDeferredValue(input);
  const LIST_SIZE = 20000;
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredValue}</div>);
    }
    return l;
  }, [deferredValue]);

  useEffect(() => {
    console.log(`Input: ${input}\nDeferred: ${deferredValue}`);
  }, [input, deferredValue]);

  return list;
};

export default List;
