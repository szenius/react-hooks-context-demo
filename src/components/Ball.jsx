import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContextProvider";

export const Ball = () => {
  const { state } = useContext(ColorContext);
  return <div className={`ball--${state.color} ma20`} />;
};
