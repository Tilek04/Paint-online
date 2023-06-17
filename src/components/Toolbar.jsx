import React from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";

import "../styles/Toolbar.scss";
import Brush from "../Tools/Brush";
import Circle from "../Tools/Circle";
import Rect from "../Tools/Rect";
import Eraser from "../Tools/Eraser";
import Line from "../Tools/LIne";

export const Toolbar = () => {
  const changeColor = (e) => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  };

  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() =>
          toolState.setTool(new Brush(canvasState.canvas))
        }></button>
      <button
        className="toolbar__btn rect"
        onClick={() =>
          toolState.setTool(new Rect(canvasState.canvas))
        }></button>
      <button
        className="toolbar__btn circle"
        onClick={() =>
          toolState.setTool(new Circle(canvasState.canvas))
        }></button>
      <button
        className="toolbar__btn eraser"
        onClick={() =>
          toolState.setTool(new Eraser(canvasState.canvas))
        }></button>
      <button
        className="toolbar__btn line"
        onClick={() =>
          toolState.setTool(new Line(canvasState.canvas))
        }></button>
      <input
        onChange={(e) => changeColor(e)}
        style={{ marginLeft: 10 }}
        type="color"
      />
    </div>
  );
};
