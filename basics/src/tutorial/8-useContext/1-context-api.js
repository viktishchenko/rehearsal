import React, { useState } from "react";
import { data } from "../../data";

/* 
  more components
  fix - context api, redux(for more complex cases)
*/

const ContextApi = () => {
  const [people, setPeople] = useState(data);

  const removeSingleItem = (id) => {
    return setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <section>
      <h3>context api</h3>
      <List people={people} removeSingleItem={removeSingleItem} />
    </section>
  );
};

const List = ({ people, removeSingleItem }) => {
  return (
    <>
      {people.map((person) => {
        const { id } = person;
        return (
          <SingleItem
            key={id}
            {...person}
            removeSingleItem={removeSingleItem}
          />
        );
      })}
    </>
  );
};

const SingleItem = ({ id, name, removeSingleItem }) => {
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

export default ContextApi;
