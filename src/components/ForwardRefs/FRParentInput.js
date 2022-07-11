import React, { useRef } from "react";
import FRInput from "./FRInput";

function FRParentInput() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Parent component creates a ref and then attaches it to the child component instance */}
      {/* the child component sees this ref and tells the parent I am not the instance you want*/}
      {/* let me (child comp.) introduce you to native input element */}
      <FRInput ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default FRParentInput;

/* 
If you want to get access to ref in parent component from child then only use forwardRef techn.
Parent (access ref) ---> Child (native input)

Rarely used. ONLY use when dealing with react libraries
*/
