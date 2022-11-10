import React, { useState } from "react";
import { data as second } from "../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(second);
  return (
    <>
      {people.map((person) => {
        console.log("person", person);
        return (
          <div className="item" key={person.id}>
            <h3>{person.name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
