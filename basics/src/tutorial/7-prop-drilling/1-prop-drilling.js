import React, { useState } from "react";
import { data } from "../../data";

/* 
  more components
  fix - context api, redux(for more complex cases)
*/

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removeSingleItem = (id) => {
    setPeople(
      people.filter((person) => {
        return person.id !== id;
      })
    );
  };

  return (
    <section>
      <h3>PropDrilling</h3>
      <List people={people} removeSingleItem={removeSingleItem} />
    </section>
  );
};

const List = ({ people, removeSingleItem }) => {
  console.log("people>>", people); // people>> Array(4) [ {…}, ... {…} ]
  return (
    <>
      {people.map((person) => {
        const { id } = person;
        return (
          <SinglePerson
            key={id}
            {...person}
            removeSingleItem={removeSingleItem}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removeSingleItem }) => {
  console.log("id,name>>", id, name); // id,name>> 1 john ... 4 anna
  return (
    <div className="item">
      <h4>{name}</h4>
      <button
        onClick={() => {
          removeSingleItem(id);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default PropDrilling;
