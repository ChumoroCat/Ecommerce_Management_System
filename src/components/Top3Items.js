import style from "./Top3.module.css";
import InsertionSort from "../helpers/InsertionSort";

export default function Top3Items(props) {
  const sortedArray = [];
  // Clone Array
  props.skus.map((sku) => {
    sortedArray.push(sku);
    return sortedArray;
  });

  // Insertion Sort
  const newSortedArray = InsertionSort(sortedArray, "qtySold");

  // Filter for Top 3
  for (let k = newSortedArray.length; k > 3; k--) {
    newSortedArray.pop();
  }

  return (
    <div className={`${style.main} ${style.teal}`}>
      <h2 className={`${style.h2} ${style["teal-bottom"]}`}>
        Top 3 Selling Items
      </h2>
      {newSortedArray.map((item) => {
        return (
          <p key={item.key} className={`${style.p} ${style["teal-bottom"]}`}>
            {item.name}
          </p>
        );
      })}
    </div>
  );
}
