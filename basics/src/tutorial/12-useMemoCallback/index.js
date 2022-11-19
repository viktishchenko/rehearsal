import { useState, useCallback, memo } from "react";
import { useFetch } from "../9-custom-hooks/2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const Index = () => {
  const { products } = useFetch(url);
  console.log("products>>", products); // re-render
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart(cart + 1);
  };

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
      <h1 style={{ marginTop: "3rem" }}>cart: {cart}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

// re-render only useFetch()
const BigList = memo(({ products, addToCart }) => {
  console.log("biglist"); // re-render list
  return (
    <section className="products">
      {products.map((product) => {
        const { id } = product;
        return <SingleProduct key={id} {...product} addToCart={addToCart} />;
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  console.log("single"); // re-render item
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;
  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>$ {price}</p>
      <button onClick={addToCart}>add</button>
    </article>
  );
};

export default Index;
