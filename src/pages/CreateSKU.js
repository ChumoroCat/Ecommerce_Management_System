import SKU from "../components/SKU";
import SubNavigation from "../UI/SubNavigation";
import { useState, useEffect } from "react";
import SKUHeader from "../UI/SKUHeader";
import LoadSpinner from "../UI/LoadSpinner";
import ErrorMessage from "../UI/ErrorMessage";

export default function CreateSKU(props) {
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
        throw new Error("Something went wrong.");
      }

      const loadedSkus = [];

      for (const key in data) {
        loadedSkus.push({
          key: key,
          id: data[key].id,
          name: data[key].name,
          category: data[key].category,
          costprice: data[key].costprice,
          sellprice: data[key].sellprice,
          qty: data[key].qty,
          expense: data[key].expense,
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
      <SubNavigation
        title="All SKU"
        createButton="Create"
        showSKU={fetchSKUHandler}
      />

      {!isLoading && !error && skus.length > 0 && <SKUHeader />}
      {!isLoading &&
        !error &&
        skus.length > 0 &&
        skus.map((item) => (
          <SKU
            key={item.key}
            firebase={item.key}
            id={item.id}
            name={item.name}
            category={item.category}
            costprice={item.costprice}
            sellprice={item.sellprice}
            qty={item.qty}
            expense={item.expense}
            showSKU={fetchSKUHandler}
          />
        ))}
      {!isLoading && error && <ErrorMessage>{error}</ErrorMessage>}
      {!isLoading && skus.length === 0 && !error && <ErrorMessage>No SKUs Exists</ErrorMessage>}
      {isLoading && <LoadSpinner />}
    </>
  );
}
