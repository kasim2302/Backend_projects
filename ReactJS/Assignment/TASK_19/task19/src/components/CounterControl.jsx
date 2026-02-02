import { useContext } from "react";
import { CounterContext } from "../pages/CounterContext";

const CounterControls = () => {
  const { increment } = useContext(CounterContext);

  return (
    <button
      onClick={increment}
      className="px-6 py-2 bg-blue-600 text-white rounded"
    >
      Increment
    </button>
  );
};

export default CounterControls;
