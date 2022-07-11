import { useCallback, useEffect, useState } from "react";

// Demonstration for Incorrect useEffect dependency
function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  // Either this version of function is allowed with useEffect having no dependency
  // since setCount is keeping track of the state
  /* 
    const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
   */

  // or this version is allowed
  const tick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(tick, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [tick]);

  return <div>{count}</div>;
}

export default IntervalHookCounter;
