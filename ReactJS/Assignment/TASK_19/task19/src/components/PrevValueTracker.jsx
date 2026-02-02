import { useState, useRef, useEffect } from "react";

export default function PrevValueTracker() {
  const [value, setValue] = useState("");
  const prevRef = useRef("");

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Previous Value Tracker</h2>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
      />

      <p className="text-gray-700">
        <span className="font-semibold">Current:</span> {value}
      </p>
      <p className="text-gray-500">
        <span className="font-semibold">Previous:</span> {prevRef.current}
      </p>
    </div>
  );
}
