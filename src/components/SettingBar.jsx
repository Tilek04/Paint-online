import React from "react";
import toolState from "../store/toolState";
import "../styles/Toolbar.scss";

export const SettingBar = () => {
  return (
    <div className="setting-bar">
      <label htmlFor="line-width">Толщина линии</label>
      <input
      onChange={e => toolState.setLineWidth(e.target.value)}
        style={{ margin: "0  10px" }}
        type="number"
        id="line-width"
        defaultValue={1}
        min={1}
        max={50}
      />
      <label htmlFor="stroke-color">Цвет обводки</label>
      <input onChange={e => toolState.setStrokeColor(e.target.value)} type="color" id="stroke-color" />
    </div>
  );
};
