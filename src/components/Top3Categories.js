import style from "./Top3.module.css";
import InsertionSort from "../helpers/InsertionSort";

export default function Top3Categories(props) {
  const sortedArray = [];
  const extractedCategories = [];
  const sortedSum = [];

  // Clone Array
  props.skus.map((sku) => {
    sortedArray.push(sku);
    return sortedArray;
  });

  // Clone Categories Array
  props.skus.map((sku) => {
    extractedCategories.push(sku.category);
    return extractedCategories;
  });
  const sortedCategories = [...new Set(extractedCategories)];

  // Sum the Categories Revenue (Time Complexity to be improved)
  let sum = 0;
  for (let i = 0; i < sortedCategories.length; i++) {
    sum = 0;
    for (let j = 0; j < sortedArray.length; j++) {
      if (sortedCategories[i] === sortedArray[j].category) {
        sum += parseInt(sortedArray[j].revenue);
      }
    }
    let object = { key: i, category: sortedCategories[i], sum: sum };
    sortedSum.push(object);
  }

  // Insertion Sort
  const newSortedArray = InsertionSort(sortedSum, "sum");

  // Filter for Top 3
  for (let k = newSortedArray.length; k > 3; k--) {
    newSortedArray.pop();
  }

  return (
    <div className={`${style.main} ${style.teal}`}>
      <h2 className={`${style.h2} ${style["teal-bottom"]}`}>
        Top 3 Categories
      </h2>
      {newSortedArray.map((item) => {
        return (
          <p key={item.key} className={`${style.p} ${style["teal-bottom"]}`}>
            {item.category}
          </p>
        );
      })}
    </div>
  );
}
