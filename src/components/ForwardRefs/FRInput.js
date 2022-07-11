import React, { forwardRef } from "react";

const FRInput = forwardRef((props, ref) => {
  // Child component receives the ref from the parent component
  // and attaches it to the native input element

  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
