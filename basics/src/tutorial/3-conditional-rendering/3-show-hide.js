import React, { useEffect, useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

// show/hide component
const Item = () => {
  const [size, setSize] = useState(window.innerHeight);

  const getWindowSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWindowSize);
    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>window</h2>
      <h3>size: {size} px</h3>
    </div>
  );
};

export default ShowHide;
