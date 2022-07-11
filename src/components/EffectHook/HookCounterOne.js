import { useEffect, useState } from "react";

function EffectHookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Runs after every render of component
  // dependency added - [count]
  useEffect(() => {
    console.log("useEffect - updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}> Count {count} times </button>
    </div>
  );
}

export default EffectHookCounterOne;
