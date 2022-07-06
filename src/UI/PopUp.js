import React from "react";
import style from "./PopUp.module.css";


function PopUp(props) {
  return (
    <div className={style.popup}>
      <div className={style["popup-inner"]}>
        {props.children}
      </div>
    </div>
  );
}

export default PopUp;
