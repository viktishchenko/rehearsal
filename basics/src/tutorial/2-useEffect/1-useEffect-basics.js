import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  console.log("render component");
  return (
    <>
      <h3>useEffect basics</h3>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
