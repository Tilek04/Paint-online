import React from "react";
import "../styles/Canvas.scss";
import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../Tools/Brush";

export const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current))
  }, []);
  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={600} height={400} />
    </div>
  );
});
