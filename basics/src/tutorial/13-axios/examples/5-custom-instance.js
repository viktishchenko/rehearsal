import { useEffect } from "react";
import authFetch from "../axios/custom";
import axios from "axios";

const customUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await authFetch("/react-store-products");
      const res2 = await axios(customUserUrl);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">Custom Instance</h2>;
};

export default CustomInstance;
