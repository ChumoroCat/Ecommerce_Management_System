import style from "./SubNavigation.module.css";
import { useState } from "react";
import ReactDOM from "react-dom";

import PopUp from "../UI/PopUp";
import Header from "../popups/Header";
import CreateSKUForm from "../popups/CreateSKUForm";

export default function SubNavigation(props) {
  const [triggerPopUp, setTriggerPopUp] = useState(false);

  function PopUpHandler() {
    setTriggerPopUp(true);
  }

  return (
    <>
      <div className={style.subnav}>
        {props.title}
        {props.createButton && (
          <button className={style.btn} type="button" onClick={PopUpHandler}>
            Create SKU
          </button>
        )}
      </div>
      {triggerPopUp &&
        ReactDOM.createPortal(
          <PopUp >
            <Header>Create Page</Header>
            <CreateSKUForm closeButton={setTriggerPopUp} showSKU={props.showSKU}/>
          </PopUp>,
          document.getElementById("popup-window")
        )}
    </>
  );
}
