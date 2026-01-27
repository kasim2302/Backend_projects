import { useState } from "react";

const TogglePrev = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div className="p-6 bg-white rounded shadow text-center">
      <h2 className="text-xl font-bold mb-4">Toggle Using Prev</h2>

      {isVisible && (
        <p className="text-green-600 mb-4">👀 Text is Visible</p>
      )}

      <button
        onClick={toggle}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Toggle
      </button>
    </div>
  );
};

export default TogglePrev;
