import { useContext } from "react";
import { CounterContext } from "../pages/CounterContext";

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  return (
    <h1 className="text-3xl font-bold">
      Count: {count}
    </h1>
  );
};

export default CounterDisplay;
