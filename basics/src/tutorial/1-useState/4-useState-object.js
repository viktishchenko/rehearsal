import React from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "Peter",
    age: 24,
    message: "radom text",
  });

  // or we can use many small states...

  const [name, setName] = React.useState("susan");
  const [age, setAge] = React.useState(22);
  const [message, setMessage] = React.useState("susan random text");

  const changeMessage = () => {
    if (message === "susan random text") {
      setMessage("susan new message");
    } else {
      setMessage("susan random text");
    }
    // if (person.message === "radom text") {
    //   setPerson({ ...person, message: "new message" });
    // } else {
    //   setPerson({ ...person, message: "radom text" });
    // }
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        chage message
      </button>
    </>
  );
};

export default UseStateObject;
