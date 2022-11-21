import { useEffect } from "react";
import authFetch from "../axios/custom";
import axios from "axios";

const customUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await authFetch("/react-store-products");
      const res2 = await axios(customUserUrl);
      console.log("res1>>", res1);
      console.log("res2>>", res2);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">Custom Instance</h2>;
};

export default CustomInstance;
