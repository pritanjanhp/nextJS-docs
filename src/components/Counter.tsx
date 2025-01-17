import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen gap-3">
      <span className="text-3xl font-bold">
        counter : {counter}
      </span>
      <div className="flex flex-col gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>{" "}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => setCounter(0)}
        >
          reset
        </button>
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
