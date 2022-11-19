import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setIsLoading(false);
  }, [url]);

  // w/o useCallback we get infinite loop w getProducts
  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  return { isLoading, products };
};
