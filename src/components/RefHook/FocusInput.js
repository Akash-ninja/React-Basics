import React, { useEffect, useRef } from "react";

function FocusInput() {
  // Holds the reference of the DOM node
  const inputRef = useRef(null);

  useEffect(() => {
    // focus the input element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInput;
