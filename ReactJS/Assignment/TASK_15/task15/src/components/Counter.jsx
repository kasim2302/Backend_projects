import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // ❌ Wrong way
  const increaseWrong = () => {
    console.log("Before (wrong):", count);

    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    console.log("After (wrong):", count);
  };

  // ✅ Correct way
  const increaseCorrect = () => {
    console.log("Before (correct):", count);

    setCount(prev => {
      console.log("Update 1:", prev);
      return prev + 1;
    });

    setCount(prev => {
      console.log("Update 2:", prev);
      return prev + 1;
    });

    setCount(prev => {
      console.log("Update 3:", prev);
      return prev + 1;
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Counter</h2>

        <p className="text-xl mb-6">
          Count: <span className="font-semibold">{count}</span>
        </p>

        <div className="space-y-3">
          <button
            onClick={increaseWrong}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
          >
            Increase by 3 (Wrong)
          </button>

          <button
            onClick={increaseCorrect}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Increase by 3 (Correct)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
