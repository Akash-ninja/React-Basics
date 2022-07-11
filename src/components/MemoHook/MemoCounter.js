import React, { useMemo, useState } from "react";

function MemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setcounterTwo(counterTwo + 1);
  };

  // Computationaly expensive operation
  const isEven = useMemo(() => {
    //useMemo() caches the result so only when dependency changes, it re-computes the value
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}> Count One - {counterOne} </button>
        {/* dont use - isEven() rather isEven because it now stores a value */}
        <span>{isEven ? " Even" : " Odd"}</span> 
      </div>
      <div>
        <button onClick={incrementTwo}> Count Two - {counterTwo} </button>
      </div>
    </div>
  );
}

export default MemoCounter;
