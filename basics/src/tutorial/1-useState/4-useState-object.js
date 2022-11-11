import React from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "Peter",
    age: 24,
    message: "radom text",
  });

  const changeMessage = () => {
    if (person.message === "radom text") {
      setPerson({ ...person, message: "new message" });
    } else {
      setPerson({ ...person, message: "radom text" });
    }
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        chage message
      </button>
    </>
  );
};

export default UseStateObject;
