import style from "../components/SKU.module.css";

export default function SKUHeader(props) {
  return (
    <div className={style["container-header"]}>
      <div className={style.flex_1}>
        <p className={style.card}>SKU</p>
        <p className={style.card}>Item Name</p>
        <p className={style.card}>Cost Price</p>
        <p className={style.card}>Quantity</p>
      </div>
      <div className={style.flex_2}>
      <p className={style.card}>Actions</p>
      </div>
    </div>
  );
}
