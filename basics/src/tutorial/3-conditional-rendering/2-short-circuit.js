import React, { useState } from "react";
// short-circuit
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h3>{text || "hello, world!"}</h3>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        toggle error
      </button>
      {/* {isError && <h2>Error...</h2>} */}
      {isError ? <h2>Error...</h2> : <h2>there is no error</h2>}
    </>
  );
};

export default ShortCircuit;
