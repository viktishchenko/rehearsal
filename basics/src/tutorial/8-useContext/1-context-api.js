import React, { useContext, useState } from "react";
import { data } from "../../data";

/* 
  more components
  fix - context api, redux(for more complex cases)
*/

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextApi = () => {
  const [people, setPeople] = useState(data);

  const removeSingleItem = (id) => {
    return setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <PersonContext.Provider value={{ removeSingleItem, people }}>
      <h3>context api/useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const contextData = useContext(PersonContext);
  // clg: contextData → Array(4) [ {…}, … ] removeSingleItem: func
  return (
    <>
      {contextData.people.map((person) => {
        const { id } = person;
        return <SingleItem key={id} {...person} />;
      })}
    </>
  );
};

const SingleItem = ({ id, name }) => {
  const { removeSingleItem } = useContext(PersonContext);
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
