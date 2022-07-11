import React, { useReducer } from "react";

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

function CounterThree() {
  // Multiple reducer handling same state but with their independent values
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  // Useful when - Multiple state variables that have same state transition
  // prevents us from having duplicate codes (reducer func.)

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}> Increment </button>
      <button onClick={() => dispatch("decrement")}> Decrement </button>
      <button onClick={() => dispatch("reset")}> Reset </button>
      <div>
        <div>Count - {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}> Increment </button>
        <button onClick={() => dispatchTwo("decrement")}> Decrement </button>
        <button onClick={() => dispatchTwo("reset")}> Reset </button>
      </div>
    </div>
  );
}

export default CounterThree;
