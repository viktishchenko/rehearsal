import React, { useState } from "react";

/* 
    JS
const input = document.getElementById("myInput")
const inputValue = input.value
    React
value, onChange
*/

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      console.log("submit the form");
      const people = {
        id: new Date().getTime().toString(),
        name: firstName,
        mail: email,
      };
      setPeople((oldValue) => {
        return [...oldValue, people];
      });
      // clean input value
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button type="submit">add person</button>
        </form>
      </article>
      <br />
      <div className="list">
        {people.map((person) => {
          const { id, name, mail } = person;
          return (
            <div key={id} className="item">
              <h2>{name}</h2>
              <p>{mail}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ControlledInputs;
