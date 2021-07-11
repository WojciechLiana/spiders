import React from "react";
import "./winWindow.sass";

export function WinWindow({nextLevelClick}) {

  return(
    <div className="win-window">
      <button className="win-window-button" onClick={()=>nextLevelClick(true)}>
        Next Level
      </button>
    </div>
  );
}