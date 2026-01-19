import PropTypes from "prop-types";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <div className="flex gap-5 ml-5">
          <button onClick={decrement} className="bg-amber-300 text-black p-3">-</button>
          <button onClick={increment} className="bg-green-300 text-black p-3">+</button>
      </div>
     
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Counter;
