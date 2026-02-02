import { useContext } from "react";
import { FocusContext } from "../pages/FocusContext";

const FocusButton = () => {
  const { focusInput } = useContext(FocusContext);

  return (
    <button
      onClick={focusInput}
      className="px-6 py-2 bg-green-600 text-white rounded"
    >
      Focus Input
    </button>
  );
};

export default FocusButton;
