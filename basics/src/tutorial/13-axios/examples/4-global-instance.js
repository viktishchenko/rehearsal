import { useEffect } from "react";
import axios from "axios";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await axios(productsUrl);
      const res2 = await axios(randomUserUrl);
      console.log(res1, "res1>>>");
      console.log(res2, "res2>>>");
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">Global Instance</h2>;
};

export default GlobalInstance;
