import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("default title");
  console.log(title);

  const handleClick = () => {
    setTitle("new title");
  };
  return (
    <>
      <h3>{title}</h3>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
