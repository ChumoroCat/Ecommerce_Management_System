import { useState, useEffect } from "react";

import SubNavigation from "../UI/SubNavigation";
import { BarChart } from "../components/BarChart";
import TotalFigures from "../components/TotalFigures";
import Top3Categories from "../components/Top3Categories";
import Top3Items from "../components/Top3Items";
import LowStockList from "../components/LowStockList";
import LoadSpinner from "../UI/LoadSpinner";
import ErrorMessage from "../UI/ErrorMessage";


export default function Dashboard(props) {
  const [skus, setSkus] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchSKUHandler() {
    setisLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-ecommerce-cms-d3834-default-rtdb.asia-southeast1.firebasedatabase.app/sku.json"
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Fetch link could have issues, something went wrong.");
      }

      const loadedSkus = [];

      for (const key in data) {
        loadedSkus.push({
          key: key,
          id: data[key].id,
          name: data[key].name,
          category: data[key].category,
          qty: data[key].qty,
          expense: data[key].expense,
          revenue: data[key].revenue,
          qtySold: data[key].qtySold,
        });
      }

      setSkus(loadedSkus);
    } catch (error) {
      setError(error.message);
    }
    setisLoading(false);
  }

  useEffect(() => {
    fetchSKUHandler();
  }, []);

  return (
    <>
      <SubNavigation title="Dashboard" />
      {!isLoading && !error && skus.length > 0 && <TotalFigures skus={skus} />}
      {!isLoading && !error && skus.length > 0 && (
        <div className="centered">
          <BarChart skus={skus} />
          <Top3Categories skus={skus} />
          <Top3Items skus={skus} />
          <LowStockList lowStock={skus} />
        </div>
      )}
      {!isLoading && error && <ErrorMessage>{error}</ErrorMessage>}
      {!isLoading && skus.length === 0 && !error && <ErrorMessage>No SKUs Exists</ErrorMessage>}
      {isLoading && <LoadSpinner />}
    </>
  );
}
