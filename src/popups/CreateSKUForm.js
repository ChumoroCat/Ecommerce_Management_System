import React, { useRef } from "react";
import style from "./Form.module.css";

function CreateSKUForm(props) {
  const categoryRef = useRef("");
  const nameRef = useRef("");
  const costRef = useRef("");
  const sellRef = useRef("");

  async function addSKUHandler(event) {
    event.preventDefault();

    const results = {
      id: Date.now(),
      category: categoryRef.current.value,
      name: nameRef.current.value,
      costprice: parseInt(costRef.current.value),
      sellprice: parseInt(sellRef.current.value),
      qty: 0,
      expense: 0,
      revenue: 0,
      qtySold: 0,
    };

    const response = await fetch(
      "https://react-ecommerce-cms-d3834-default-rtdb.asia-southeast1.firebasedatabase.app/sku.json",
      {
        method: "POST",
        body: JSON.stringify(results),
        headers: { "Content-Type": "application/json" },
      }
    );
    await response.json();
  }

  async function completeSubmit(event) {
    await addSKUHandler(event);
    await props.closeButton(false);
    await props.showSKU();
  }

  return (
    <div>
      <form id="CreateSKUForm" className={style.form} onSubmit={completeSubmit}>
        <label htmlFor="category" className={style.labels}>
          Category
        </label>
        <select
          name="category"
          className={style["controls-select"]}
          ref={categoryRef}
          required
        >
          <option value="Bags">Bags</option>
          <option value="Belts">Belts</option>
          <option value="Clothes">Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Wallets">Wallets</option>
        </select>
        <label htmlFor="name" className={style.labels}>
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={style.controls}
          ref={nameRef}
          minLength="3"
          maxLength="20"
          required
        />
        <label htmlFor="costprice" className={style.labels}>
          Cost Price
        </label>
        <input
          type="number"
          name="costprice"
          placeholder="Cost Price"
          className={style.controls}
          ref={costRef}
          min="1"
          max="9999"
          step="1"
          required
        />
        <label htmlFor="sellprice" className={style.labels}>
          Selling Price
        </label>
        <input
          type="number"
          name="sellprice"
          placeholder="Selling Price"
          className={style.controls}
          ref={sellRef}
          min="1"
          max="9999"
          step="1"
          required
        />
        <div>
          <input className={style.btn} type="submit" value="Submit" />
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

export default CreateSKUForm;
