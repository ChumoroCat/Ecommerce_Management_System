import React from "react";
import style from "./Header.module.css";

function header(props) {
  return <div className={style.header}>{props.children}</div>;
}

export default header;
