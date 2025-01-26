import { useRef, useState } from "react";

const Example =() => {
  const countRef = useRef(0); // Initialize useRef with a value
  const [state, setState] = useState(0); // State to trigger re-renders

  const increment = () => {
    countRef.current += 1; // Update useRef
    console.log("useRef value:", countRef.current);
  };

  return (
    <div>
      <p>State value: {state}</p>
      <button onClick={() => setState(state + 1)}>Re-render Component</button>
      <button onClick={increment}>Update useRef</button>
    </div>
  );
}
export default Example;

