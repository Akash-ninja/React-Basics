import { useState } from "react";

function useCounter(initialValue = 0, value) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  const resetCount = () => {
    setCount(initialValue);
  };

  return [count, increment, decrement, resetCount];
}

export default useCounter;
