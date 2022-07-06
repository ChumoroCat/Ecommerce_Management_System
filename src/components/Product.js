import style from "./Product.module.css";
import PopUp from "../UI/PopUp";
import image from "../assets/placeholder.jpg";
import ReactDOM from "react-dom";
import { useState } from "react";

import Header from "../popups/Header";
import BuyProductForm from "../popups/BuyProductForm";

export default function Product(props) {
  const [triggerBuy, setTriggerBuy] = useState(false);

  function BuyPopUpHandler() {
    setTriggerBuy(true);
  }

  return (
    <div className={style.container}>
      <img src={image} alt="Placeholder" />
      <div className={style.flex_2}>
        <p className={style["card-heavy"]}>{props.name}</p>
        <p className={style.card}>${props.sellprice}</p>
      </div>
      <div>
        <button className={style.btn} type="button" onClick={BuyPopUpHandler}>
          Buy
        </button>
      </div>

      {triggerBuy &&
        ReactDOM.createPortal(
          <PopUp>
            <Header>Buy Product</Header>
            <BuyProductForm
              closeButton={setTriggerBuy}
              showSKU={props.showSKU}
              qty={props.qty}
              revenue={props.revenue}
              sellprice={props.sellprice}
              qtySold={props.qtySold}
              firebase={props.firebase}
            />
          </PopUp>,
          document.getElementById("popup-window")
        )}
    </div>
  );
}
