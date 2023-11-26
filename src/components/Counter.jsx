import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Add +1</button>
    </div>
  );
};

export default Counter;
