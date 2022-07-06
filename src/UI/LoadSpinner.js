import React from "react";
import style from "./LoadSpinner.module.css";

function LoadSpinner(props) {
  return (
    <div className="centered_middle">
      <div className={style["lds-hourglass"]}></div>
    </div>
  );
}

export default LoadSpinner;
