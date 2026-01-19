import React, { useState } from "react";
import Counter from "./Counter";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <Counter
      count={count}
      increment={increment}
      decrement={decrement}
    />
  );
};

export default CounterApp;
