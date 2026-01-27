import { useState } from "react";

const BatchingExample = () => {
  const [count, setCount] = useState(0);

  // ❌ Wrong
  const wrongUpdate = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // ✅ Correct
  const correctUpdate = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-6 bg-white rounded shadow text-center">
      <h2 className="text-xl font-bold mb-4">Batching Example</h2>

      <p className="mb-4">Count: {count}</p>

      <div className="space-x-2">
        <button
          onClick={wrongUpdate}
          className="bg-red-500 text-white px-3 py-2 rounded"
        >
          Wrong +3
        </button>

        <button
          onClick={correctUpdate}
          className="bg-green-500 text-white px-3 py-2 rounded"
        >
          Correct +3
        </button>
      </div>
    </div>
  );
};

export default BatchingExample;
