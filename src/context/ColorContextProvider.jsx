import React, { createContext, useReducer } from "react";
import { colorReducer } from "./color.reducer";

const initialState = { color: "red" };
export const ColorContext = createContext(initialState);

export const ColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
