import style from "./TotalFigures.module.css";

export default function TotalFigures(props) {
  let expense = 0;
  let revenue = 0;
  let profit = 0;

  // Sum Expense and Revenue
  for (let i = 0; i < props.skus.length; i++) {
    expense += parseInt(props.skus[i].expense);
    revenue += parseInt(props.skus[i].revenue);
  }

  // Calculate Profit
  profit = revenue - expense;

  return (
    <div className={style.main}>
      <div className={style.card}>
        <h2>Total Revenue:</h2>
        <p className={style.green}>${revenue}</p>
      </div>
      <div className={style.card}>
        <h2>Total Expense:</h2>
        <p className={style.red}>${expense}</p>
      </div>
      <div className={style.card}>
        <h2>Total Profit:</h2>
        <p className={style.blue}>${profit}</p>
      </div>
    </div>
  );
}
