import { useRef, useState } from "react";

export default function FocusAfterUpdate() {
  const [text, setText] = useState("");
  const ref = useRef(null);

  const submit = () => {
    setText("");
    ref.current.focus();
  };

  return (
    <div className="flex justify-center items-center flex-col gap-3 mt-10">
      <input ref={ref} className="border px-3 py-2 w-70" value={text} onChange={e => setText(e.target.value)} />
      <button className="bg-black text-white rounded p-3" onClick={submit}>Submit</button>
    </div>
  );
}
