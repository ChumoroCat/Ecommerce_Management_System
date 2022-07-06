import Product from "../components/Product";
import SubNavigation from "../UI/SubNavigation";
import { useState, useEffect } from "react";
import LoadSpinner from "../UI/LoadSpinner";
import ErrorMessage from "../UI/ErrorMessage";

export default function Products(props) {
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
        if (data[key].qty > 0) {
          loadedSkus.push({
            key: key,
            category: data[key].category,
            name: data[key].name,
            sellprice: data[key].sellprice,
            qty: data[key].qty,
            revenue: data[key].revenue,
            qtySold: data[key].qtySold,
          });
        }
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
    <div>
      <SubNavigation title="Customer Product Page (Stocks with 0 stock count is omitted)" />
      <div className="centered_left">
        {!isLoading &&
          !error &&
          skus.length > 0 &&
          skus.map((product) => (
            <Product
              key={product.key}
              firebase={product.key}
              category={product.category}
              name={product.name}
              sellprice={product.sellprice}
              qty={product.qty}
              revenue={product.revenue}
              qtySold={product.qtySold}
              showSKU={fetchSKUHandler}
            />
          ))}
      </div>
      {!isLoading && error && <ErrorMessage>{error}</ErrorMessage>}
      {!isLoading && skus.length === 0 && !error && <ErrorMessage>No SKUs Exists</ErrorMessage>}
      {isLoading && <LoadSpinner />}
    </div>
  );
}
