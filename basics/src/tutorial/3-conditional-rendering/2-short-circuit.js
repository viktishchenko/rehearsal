import React, { useState } from "react";
// short-circuit
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("hi");
  const firstValue = text || "hello, world!";
  const secondValue = text && "hello, world!";

  return (
    <>
      <h2>f: {firstValue}</h2>
      <h2>s: {secondValue}</h2>
      <h2>value: {!text && <span>halo</span>}</h2>
      <h2>value: {!text || <span>halo</span>}</h2>
    </>
  );
};

export default ShortCircuit;
