import React from "react";
import style from "./Form.module.css";

function DeleteSKUForm(props) {
  async function deleteSKUHandler(event) {
    event.preventDefault();

    const response = await fetch(
      `https://react-ecommerce-cms-d3834-default-rtdb.asia-southeast1.firebasedatabase.app/sku/${props.firebase}.json`,
      {
        method: "DELETE",
      }
    );
    await response.json();
  }

  async function completeDelete(event) {
    await deleteSKUHandler(event); 
    await props.closeButton(false);
    await props.showSKU(); 
  }

  return (
    <div className={style.form} >
      <header className={style.message}>
        Are you really sure you want to delete this record?
      </header>
      <form onSubmit={completeDelete}>
        <input className={style.btn} type="submit" value="Yes" />
        <button
          className={style.btn}
          type="button"
          onClick={() => props.closeButton(false)}
        >
          No
        </button>
      </form>
    </div>
  );
}

export default DeleteSKUForm;
