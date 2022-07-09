import React, { useRef } from "react";
import style from "./Form.module.css";

function BuyProductForm(props) {
  const qtyRef = useRef("");

  async function removeQtyHandler(event) {
    event.preventDefault();

    const results = {
      qty: parseInt(props.qty) - parseInt(qtyRef.current.value),
      revenue: parseInt(props.revenue) + parseInt(props.sellprice * qtyRef.current.value),
      qtySold: parseInt(props.qtySold) + parseInt(qtyRef.current.value),
    };

    const response = await fetch(
      `https://react-ecommerce-cms-d3834-default-rtdb.asia-southeast1.firebasedatabase.app/sku/${props.firebase}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(results),
        headers: { "Content-Type": "application/json" },
      }
    );
    await response.json();
  }

  async function completeSell(event) {
    await removeQtyHandler(event);
    await props.closeButton(false);
    await props.showSKU();
  }

  return (
    <div>
      <form id="BuyProductForm" className={style.form} onSubmit={completeSell}>
        <label htmlFor="qty" className={style.labels}>
          Quantity to Buy
        </label>
        <input
          type="number"
          name="qty"
          placeholder="Quantity"
          className={style.controls}
          ref={qtyRef}
          min="1"
          max={props.qty}
          step="1"
          required
        />

        <div>
          <input className={style.btn} type="submit" value="Buy" />
          <button
            className={style.btn}
            type="button"
            onClick={() => props.closeButton(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default BuyProductForm;
