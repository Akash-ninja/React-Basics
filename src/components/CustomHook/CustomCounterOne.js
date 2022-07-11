import React from "react";
import useCounter from "./hooks/useCounter";

function CustomCounterOne() {
  const [count, increment, decrement, resetCount] = useCounter(0, 1);

  return (
    <div>
      <h2> Count = {count} </h2>
      <button onClick={increment}> Increment by 1 </button>
      <button onClick={decrement}> Decrement by 1 </button>
      <button onClick={resetCount}> Reset </button>
    </div>
  );
}

export default CustomCounterOne;
