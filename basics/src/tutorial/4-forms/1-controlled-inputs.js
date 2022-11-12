import React from "react";

/* 
    JS
const input = document.getElementById("myInput")
const inputValue = input.value
    React
value, onChange
*/

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world");
  };
  return (
    <>
      <article>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" />
          </div>
          <button type="submit">add person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
