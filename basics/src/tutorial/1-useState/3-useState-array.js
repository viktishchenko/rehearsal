import React from "react";
// import { useState } from "react";
import { data } from "../../data";

/* anfn, nfn Ctrl + Space */

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h3 style={{ marginBottom: "0" }}>{name}</h3>
            <button
              style={{ color: "red" }}
              onClick={() => {
                removeItem(id);
              }}
            >
              x
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        clear all item
      </button>
    </>
  );
};

export default UseStateArray;
