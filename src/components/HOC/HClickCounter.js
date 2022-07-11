import React from "react";
import withCounter from "./hoc/withCounter";

function HClickCounter(props) {
  const { count, incrementCount } = props;

  return (
    <div>
      <button onClick={incrementCount}>
        {props.name} Clicked {count} times
      </button>
    </div>
  );
}

export default withCounter(HClickCounter, 5);
