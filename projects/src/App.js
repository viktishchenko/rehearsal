/* imrs */
import { useState } from "react";
import SingleColor from "./draft/09-colorgen/SingleColor";

import Values from "values.js";

/* rfce */

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, idx) => {
          const hex = color.hex;
          return <SingleColor key={idx} {...color} idx={idx} colorHex={hex} />;
        })}
      </section>
    </>
  );
}

export default App;
