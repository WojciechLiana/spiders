import React from "react";
import "./winWindow.sass";

export function WinWindow({nextLevelClick}) {

  return(
    <div className="win-window">
      <span className="win-window-button" onClick={()=>nextLevelClick(true)}>
        <div className="win-window-label">Next Level</div>
        <div className="win-window-icon">&#10174;</div>
      </span>
    </div>
  );
}