import { useState } from "react";
import List from "./draft/01-birth/List";
import { data } from "./draft/01-birth/data";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
