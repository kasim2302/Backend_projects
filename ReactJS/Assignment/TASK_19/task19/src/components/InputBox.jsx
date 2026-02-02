import { useContext } from "react";
import { FocusContext } from "../pages/FocusContext";

const InputBox = () => {
  const { inputRef } = useContext(FocusContext);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Click button to focus me"
      className="border px-4 py-2 rounded w-64"
    />
  );
};

export default InputBox;
