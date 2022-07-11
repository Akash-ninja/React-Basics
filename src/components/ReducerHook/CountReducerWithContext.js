import React, { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentD from "./ComponentD";
import ComponentF from "./ComponentF";

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

export const CountContext = createContext();

function CountReducerWithContext() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        Count - {count}
        <ComponentA />
        <ComponentD />
        <ComponentF />
      </div>
    </CountContext.Provider>
  );
}

export default CountReducerWithContext;
