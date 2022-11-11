import React, { useEffect, useState } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    return setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log("render");
  return (
    <>
      <h3>window current width</h3>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
