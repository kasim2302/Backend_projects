import { useContext, useEffect, useState } from "react";
import { RenderCountContext } from "../pages/RenderCountContext";

const Counter = () => {
  const [count, setCount] = useState(0);
  const { renderCountRef } = useContext(RenderCountContext);

  // 🔥 Runs after EVERY render
  useEffect(() => {
    renderCountRef.current += 1;
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Count: {count}</h1>

      <button
        onClick={() => setCount(prev => prev + 1)}
        className="px-6 py-2 bg-blue-600 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
