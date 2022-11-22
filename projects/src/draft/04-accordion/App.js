import { useState } from "react";
import data from "./draft/04-accordion/data";
import SingleQuestions from "./draft/04-accordion/Questions";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>accordion project</h3>
        <section className="info">
          {questions.map((item) => {
            const { id } = item;
            return <SingleQuestions key={id} {...item} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
