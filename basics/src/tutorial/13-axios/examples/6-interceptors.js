import { useEffect } from "react";

const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    console.log("axios interceptors");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Interceptors</div>;
};

export default Interceptors;
