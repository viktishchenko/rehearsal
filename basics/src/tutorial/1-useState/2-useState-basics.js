import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("default title");
  console.log(title);

  const handleClick = () => {
    if (title === "default title") {
      setTitle("new title");
    } else {
      setTitle("default title");
    }
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
