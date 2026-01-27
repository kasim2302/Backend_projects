import { useState } from "react";

const ArrayPrev = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers(prev => [...prev, prev.length + 1]);
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">
        Array Add Using Prev
      </h2>

      <button
        onClick={addNumber}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 "
      >
        Add Number
      </button>

      <ul className="list-disc pl-6">
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayPrev;
