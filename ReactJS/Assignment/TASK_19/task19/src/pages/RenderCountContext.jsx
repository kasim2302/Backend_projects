import { createContext, useRef } from "react";

export const RenderCountContext = createContext();

export const RenderCountProvider = ({ children }) => {
  const renderCountRef = useRef(0);

  return (
    <RenderCountContext.Provider value={{ renderCountRef }}>
      {children}
    </RenderCountContext.Provider>
  );
};
