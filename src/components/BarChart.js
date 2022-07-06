import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import style from "./BarChart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
    title: {
      display: true,
      text: "Revenue / Expenses ",
    },
    Tooltip: { display: false },
  },
};

const labels = ["Revenue", "Expenses", "Profit"];

export const data = {
  labels,
  datasets: [
    {
      label: "Amount",
      data: ["", "", ""],
      borderColor: [
        "rgb(97, 255, 168)",
        "rgb(255, 99, 132)",
        "rgb(97, 237, 255)",
      ],
      backgroundColor: [
        "rgb(97, 255, 168)",
        "rgb(255, 99, 132)",
        "rgb(97, 237, 255)",
      ],
    },
  ],
};

export function BarChart(props) {
  let expense = 0;
  let revenue = 0;
  let profit = 0;

  for (let i = 0; i < props.skus.length; i++) {
    expense += parseInt(props.skus[i].expense);
    revenue += parseInt(props.skus[i].revenue);
  }

  profit = revenue - expense;
  data.datasets[0].data = [revenue, expense, profit];

  return (
    <div className={style.barchart}>
      <Bar options={options} data={data} />
    </div>
  );
}
