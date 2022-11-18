import { useState, useCallback, useMemo } from "react";
import { useFetch } from "../9-custom-hooks/2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const Index = () => {
  const { products } = useFetch(url);
  console.log("products>>", products);
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      <BigList products={products} />
    </>
  );
};

const BigList = ({ products }) => {
  console.log("biglist"); // re-render list
  return (
    <section className="products">
      {products.map((product) => {
        const { id } = product;
        return <SingleProduct key={id} {...product} />;
      })}
    </section>
  );
};

const SingleProduct = ({ fields }) => {
  console.log("single"); // each single product re-render
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;
  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>$ {price}</p>
    </article>
  );
};

export default Index;
