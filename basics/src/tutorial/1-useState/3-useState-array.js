import React, { useState } from "react";
import { data as second } from "../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(second);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h3>{name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
