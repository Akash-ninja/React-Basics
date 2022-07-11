import React from "react";
import useCounter from "./hooks/useCounter";

function CustomCounterTwo() {
  const [count, increment, decrement, resetCount] = useCounter(10, 5);

  return (
    <div>
      <h2> Count = {count} </h2>
      <button onClick={increment}> Increment by 5 </button>
      <button onClick={decrement}> Decrement by 5 </button>
      <button onClick={resetCount}> Reset </button>
    </div>
  );
}

export default CustomCounterTwo;
