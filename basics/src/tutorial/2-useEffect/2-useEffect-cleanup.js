import React, { useEffect, useState } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    return setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });

  return (
    <>
      <h3>window current width</h3>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
