import { useRef, useState } from "react";

export default function RefVsStateCounter() {
  const refCount = useRef(0);
  const [stateCount, setStateCount] = useState(0);

  return (
    <div className="space-y-4 flex justify-center items-center flex-col  mt-10">
      <h2 className="text-xl font-bold">Ref vs State</h2>
      <button className="btn" onClick={() => refCount.current++}>
        Ref +1
      </button>
      <button className="bg-black text-white rounded p-3" onClick={() => setStateCount(p => p + 1)}>
        State +1
      </button>
      <p>Ref: {refCount.current}</p>
      <p>State: {stateCount}</p>
    </div>
  );
}
