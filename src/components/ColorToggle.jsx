import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContextProvider";
import { setColor } from "../context/color.actions";

export const ColorToggle = () => {
  const { dispatch } = useContext(ColorContext);
  const dispatchSetColor = (label) => dispatch(setColor(label));
  return (
    <div className="toggle ma20">
      <ColorToggleButton label={"red"} dispatchSetColor={dispatchSetColor} />
      <ColorToggleButton label={"blue"} dispatchSetColor={dispatchSetColor} />
      <ColorToggleButton label={"yellow"} dispatchSetColor={dispatchSetColor} />
    </div>
  );
};

export const ColorToggleButton = ({ label, dispatchSetColor }) => (
  <button className="ma20" onClick={() => dispatchSetColor(label)}>{label}</button>
);
