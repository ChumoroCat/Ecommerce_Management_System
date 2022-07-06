import style from "./SKU.module.css";
import { useState } from "react";
import PopUp from "../UI/PopUp";
import ReactDOM from "react-dom";

import EditSKUForm from "../popups/EditSKUForm";
import BuySKUForm from "../popups/BuySKUForm";
import DeleteSKUForm from "../popups/DeleteSKUForm";
import Header from "../popups/Header";

export default function SKU(props) {
  const [triggerEdit, setTriggerEdit] = useState(false);
  const [triggerDelete, setTriggerDelete] = useState(false);
  const [triggerBuy, setTriggerBuy] = useState(false);

  function EditPopUpHandler() {
    setTriggerEdit(true);
  }

  function DeletePopUpHandler() {
    setTriggerDelete(true);
  }

  function BuyPopUpHandler() {
    setTriggerBuy(true);
  }

  return (
    <div className={style.container} id={props.firebase}>
      <div className={style.flex_1}>
        <p className={style.card}>{props.id}</p>
        <p className={style.card}>{props.name}</p>
        <p className={style.card}>${props.costprice}</p>
        <p className={style.card}>{props.qty} pcs</p>
      </div>
      <div className={style.flex_2}>
        <button className={style.btn} type="button" onClick={EditPopUpHandler}>
          Edit
        </button>
        <button
          className={style.btn}
          type="button"
          onClick={DeletePopUpHandler}
        >
          Delete
        </button>
        <button className={style.btn} type="button" onClick={BuyPopUpHandler}>
          Quick Buy
        </button>
      </div>

      {/* React Portals */}
      {triggerEdit &&
        ReactDOM.createPortal(
          <PopUp>
            <Header>Edit SKU</Header>
            <EditSKUForm
              closeButton={setTriggerEdit}
              firebase={props.firebase}
              showSKU={props.showSKU}
              category={props.category}
              name={props.name}
              costprice={props.costprice}
              sellprice={props.sellprice}
            />
          </PopUp>,
          document.getElementById("popup-window")
        )}
      {triggerDelete &&
        ReactDOM.createPortal(
          <PopUp>
            <Header>Delete SKU</Header>
            <DeleteSKUForm
              closeButton={setTriggerDelete}
              firebase={props.firebase}
              showSKU={props.showSKU}
            />
          </PopUp>,
          document.getElementById("popup-window")
        )}
      {triggerBuy &&
        ReactDOM.createPortal(
          <PopUp>
            <Header>Buy Stocks</Header>
            <BuySKUForm
              closeButton={setTriggerBuy}
              qty={props.qty}
              expense={props.expense}
              costprice={props.costprice}
              firebase={props.firebase}
              showSKU={props.showSKU}
            />
          </PopUp>,
          document.getElementById("popup-window")
        )}
    </div>
  );
}
