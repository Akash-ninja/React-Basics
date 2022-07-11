import React from "react";
import withCounter from "./hoc/withCounter";

function HoverCounter(props) {
  const { count, incrementCount } = props; // getting the props from HOC

  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    </div>
  );
}

export default withCounter(HoverCounter, 1);
