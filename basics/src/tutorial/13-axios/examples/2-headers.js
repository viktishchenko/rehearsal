import { useState } from "react";

const url = "https://icanhazdadjoke.com/";
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchJoke = async () => {
    console.log("fetch dad joke");
  };

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};

export default Headers;
