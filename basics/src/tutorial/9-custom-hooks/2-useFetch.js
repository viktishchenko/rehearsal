import { useState, useEffect } from "react";

export const useFetch = (url) => {
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
  }, [url]);

  return { isLoading, products };
};
