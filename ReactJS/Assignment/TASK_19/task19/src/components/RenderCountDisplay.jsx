import { useContext } from "react";
import { RenderCountContext } from "../pages/RenderCountContext";

const RenderCountDisplay = () => {
  const { renderCountRef } = useContext(RenderCountContext);

  return (
    <h2 className="text-lg font-semibold">
      Render Count: {renderCountRef.current}
    </h2>
  );
};

export default RenderCountDisplay;
