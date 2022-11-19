import React, { useEffect } from "react";

// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  useEffect(() => {
    console.log("first request");
  }, []);

  return <h2 className="text-center">First Request</h2>;
};

export default FirstRequest;
