import { useEffect } from "react";

const CustomInstance = () => {
  const fetchData = async () => {
    console.log("axios custom instance");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="text-center">Custom Instance</div>;
};

export default CustomInstance;
