import { useState } from "react";

const FormSubmitCounter = () => {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-6 bg-white rounded shadow text-center">
      <h2 className="text-xl font-bold mb-4">Form Submit Counter</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          className="border p-2 rounded mr-2"
          placeholder="Type something"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          Submit
        </button>
      </form>

      <p className="font-semibold">
        Submitted: {count} times
      </p>
    </div>
  );
};

export default FormSubmitCounter;
