import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import { data } from "../../data";

// reducer function
const reducer = (state, action) => {
  if (action.type === "TESTING") {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  // return state;
  throw new Error("no matching action type");
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Hello, World!",
};

const Index = () => {
  const [name, setName] = useState("");
  // add useReducer
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: "TESTING" });
    } else {
      dispatch({ type: "RANDOM" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add person</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Index;
