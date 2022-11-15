import { useFetch } from "./2-useFetch";

// data
const url = "https://course-api.com/javascript-store-products";

const FetchExample = () => {
  const { isLoading, products } = useFetch(url);
  console.log("products>>", products);
  return (
    <>
      <h3>fetch data example</h3>
      <h4>{isLoading ? "loading..." : "data"}</h4>
    </>
  );
};

export default FetchExample;
