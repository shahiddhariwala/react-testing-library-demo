import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex border-2 flex-col gap-8 p-2">
      <div className="text-2xl bolder">Count is: {count}</div>
      <div className="flex gap-6 align-center justify-center">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-orange-500 text-lg p-2 text-white rounded-md hover:bg-orange-700"
        >
          Add +1
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-red-500 text-lg p-2 text-white rounded-md hover:bg-red-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
