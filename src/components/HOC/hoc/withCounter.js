import React, { useState } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {

  // Modifies the component
  const WithCounter = (props) => {
    // both normal or arrrow function syntax allowed
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + incrementNumber);
    };

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };

  // returns the modified component
  return WithCounter;
};

export default withCounter;
