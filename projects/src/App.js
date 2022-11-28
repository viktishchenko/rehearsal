import { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";

const defaultImage = "https://randomuser.me/api/portraits/women/8.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  /* get data fetch */
  const handleValue = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  console.log("typeof person>>", typeof person);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          {/* showcase && || operator */}
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
