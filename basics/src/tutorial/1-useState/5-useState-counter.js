import React from "react";

const UseStateCounter = () => {
  const [value, setValue] = React.useState(0);

  const reset = () => {
    setValue(0);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h3>regular counter</h3>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
