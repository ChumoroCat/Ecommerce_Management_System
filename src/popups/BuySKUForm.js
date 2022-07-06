import React, { useRef } from "react";
import style from "./Form.module.css";

function BuySKUForm(props) {
  const qtyRef = useRef("");

  async function addQtyHandler(event) {
    event.preventDefault();

    const results = {
      qty: parseInt(qtyRef.current.value) + parseInt(props.qty),
      expense: parseInt(props.expense) + parseInt(props.costprice * qtyRef.current.value),
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

  async function completeBuy(event) {
    await addQtyHandler(event);
    await props.closeButton(false);
    await props.showSKU();
  }

  return (
    <div>
      <form className={style.form} onSubmit={completeBuy}>
        <label htmlFor="qty" className={style.labels}>
          Quantity to Buy
        </label>
        <input
          type="number"
          name="qty"
          placeholder="Quantity"
          className={style.controls}
          ref={qtyRef}
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

export default BuySKUForm;
