import React from "react";

function Count({ text, count }) {
  console.log(`Rendering ${text}`);

  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(Count);

// React.memo() is rarely used now
// It is used to check if the props of the component changes then only render that component
