import React from "react";
import "./winWindow.sass";
import arrowImg from "../../../assets/arrow.png";

export default function WinWindow({ nextLevelClick }) {

  return (
    <div className="win-window">
      <span className="win-window-button" onClick={nextLevelClick.bind(null, true)}>
        <img src={arrowImg} alt="arrow" className="win-window-arrow" />
      </span>
    </div>
  );
}