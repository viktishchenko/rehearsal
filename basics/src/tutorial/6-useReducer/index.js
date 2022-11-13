import React, { useState } from "react";
import Modal from "./Modal";
import { data } from "../../data";

const Index = () => {
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      console.log("halo");
      console.log("name", name);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      console.log("bye");
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        // window.location.reload();
      }, 3000);
    }
  };

  // const inputOnChange = (e) => {
  //   const input = e.target.value;
  //   setName(input);
  //   console.log("input", input);
  // };

  return (
    <>
      {showModal && <Modal />}
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            // onChange={(e) => inputOnChange(e)}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add person</button>
      </form>
      <div className="item">
        <ul>
          {people.map((person) => {
            const { id, name } = person;
            return (
              <li key={id}>
                <h3>{name}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Index;
