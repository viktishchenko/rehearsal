import React, { useEffect, useRef } from "react";

/* 
    preserves value/сохраняет значения
    DOES NOT trigger re-render
    target DOM nodes/elements
*/

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("it's work!"); // it's work!
    console.log(refContainer.current.value); // input value
    console.log(divContainer); // Object { current: div }
  };
  console.log(refContainer); // Object {current: null}
  // useRef DONT trigger re-render!
  useEffect(() => {
    console.log(refContainer.current); // <input type="text">
    refContainer.current.focus();
  }, []);

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="">
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello, world</div>
    </>
  );
};

export default UseRefBasics;
