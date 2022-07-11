import { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // safe updating of state
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}> Reset </button>
      <button onClick={() => setCount(count + 1)}> Increment </button>
      {/* unsafe updating of state */}
      <button onClick={() => setCount(count + 1)}> Decrement </button>
      <button onClick={incrementFive}> Increment 5 </button>
    </div>
  );
}

export default HookCounterTwo;
