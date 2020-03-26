import React from "react";
import ProgressBarTiles from "./ProgressBarTiles";

const PropgressBar = () => {
  return (
    <div className="ProgressBar">
      <ProgressBarTiles />
      <ProgressBarTiles />
      <ProgressBarTiles />
      <ProgressBarTiles />
      <hr className="progress-line" />
    </div>
  );
};

export default PropgressBar;
