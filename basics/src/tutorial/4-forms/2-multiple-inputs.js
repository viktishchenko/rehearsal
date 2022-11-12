import React, { useState } from "react";

/* 
    JS
const input = document.getElementById("myInput")
const inputValue = input.value
    React
value, onChange
dynamic object properties
*/

const MultipleInputs = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
  });
  const [people, setPeople] = useState([]);

  // get value from multiple inputs !!!
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      console.log("submit form");
      setPerson({ firstName: "", email: "", age: "" });
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form action="" className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age: </label>
            <input
              type="age"
              name="age"
              id="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      <br />
      <div className="list">
        {people.map((person) => {
          const { id, firstName, email: mail, age: a } = person;
          return (
            <div key={id} className="item">
              <h2>{firstName}</h2>
              <p>{a}</p>
              <p>{mail}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MultipleInputs;
