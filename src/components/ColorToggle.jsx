import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContextProvider";
import { setColor } from "../context/color.actions";

export const ColorToggle = () => {
  const { dispatch } = useContext(ColorContext);
  const dispatchSetColor = (label) => dispatch(setColor(label));
  return (
    <div className="toggle ma20">
      <ColorToggleButton
        label={"red"}
        onClickHandler={() => dispatchSetColor("red")}
      />
      <ColorToggleButton
        label={"blue"}
        onClickHandler={() => dispatchSetColor("blue")}
      />
      <ColorToggleButton
        label={"yellow"}
        onClickHandler={() => dispatchSetColor("yellow")}
      />
    </div>
  );
};

export const ColorToggleButton = ({ label, onClickHandler }) => (
  <button className="ma20" onClick={onClickHandler}>
    {label}
  </button>
);
