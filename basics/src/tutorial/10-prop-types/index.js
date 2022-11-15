import React from "react";
import Product from "./Product";
import { useFetch } from "../9-custom-hooks/2-useFetch";

const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products, isLoading } = useFetch(url);
  return (
    <div>
      <h3>{isLoading ? "loading..." : "single product"}</h3>
      <section className="products">
        {products.map((product) => {
          const { id } = product;
          return <Product key={id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
