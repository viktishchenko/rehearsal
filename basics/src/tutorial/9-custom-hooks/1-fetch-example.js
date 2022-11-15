import React, { useEffect, useState } from "react";

// data
const url = "https://course-api.com/javascript-store-products";

const FetchExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log("products>>", products);
  return (
    <>
      <h3>fetch data example</h3>
      <h4>{isLoading ? "loading..." : "data"}</h4>
    </>
  );
};

export default FetchExample;
