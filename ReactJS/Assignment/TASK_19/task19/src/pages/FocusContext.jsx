import { createContext, useRef } from "react";

export const FocusContext = createContext();

export const FocusProvider = ({ children }) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <FocusContext.Provider value={{ inputRef, focusInput }}>
      {children}
    </FocusContext.Provider>
  );
};
