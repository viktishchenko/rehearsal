import { useState } from "react";
import axios from "axios";

const url = "https://api.chucknorris.io/jokes/random";

// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept:
            "text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8",
        },
      });
      setJoke(data.value);
    } catch (error) {
      console.log(error.response);
    }
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
