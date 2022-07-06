import React, { useRef } from "react";
import style from "./Form.module.css";

function EditSKUForm(props) {
  const categoryRef = useRef("");
  const nameRef = useRef("");
  const costRef = useRef("");
  const sellRef = useRef("");

  async function editSKUHandler(event) {
    event.preventDefault();

    const results = {
      category: categoryRef.current.value,
      name: nameRef.current.value,
      costprice: costRef.current.value,
      sellprice: sellRef.current.value,
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

  async function completeEdit(event) {
    await editSKUHandler(event);
    await props.closeButton(false);
    await props.showSKU();
  }

  return (
    <div>
      <form className={style.form} onSubmit={completeEdit}>
        <label htmlFor="category" className={style.labels}>
          Category
        </label>
        <select
          name="category"
          className={style["controls-select"]}
          ref={categoryRef}
          defaultValue={props.category}
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
          defaultValue={props.name}
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
          defaultValue={props.costprice}
          min="1"
          max="9999"
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
          defaultValue={props.sellprice}
          min="1"
          max="9999"
          required
        />

        <div>
          <input className={style.btn} type="submit" value="Edit" />
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

export default EditSKUForm;
