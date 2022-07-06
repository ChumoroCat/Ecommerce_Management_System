import style from "./Top3.module.css";

export default function LowStockList(props) {
  return (
    <div className={`${style.main} ${style.red}`}>
      <h2 className={`${style.h2} ${style["red-bottom"]}`}>Low Stock</h2>
      {props.lowStock.map((item) => {
        if (item.qty < 6)
          return (
            <p key={item.key} className={`${style.p} ${style["red-bottom"]}`}>{item.name}</p>
          );
        return null;
      })}
    </div>
  );
}
