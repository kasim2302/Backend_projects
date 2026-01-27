import { useState } from "react";

const CounterPrev = () => {
  const [count, setCount] = useState(0);

  const increaseByFive = () => {
    setCount(prev => prev + 5);
  };

  return (
    <div className="p-6 bg-white rounded shadow text-center">
      <h2 className="text-xl font-bold mb-2">Counter with Prev</h2>
      <p className="mb-4">Count: {count}</p>
      <button
        onClick={increaseByFive}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increase by 5
      </button>
    </div>
  );
};

export default CounterPrev;
