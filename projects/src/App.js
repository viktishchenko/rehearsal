import SetupForm from "./draft/23-quiz/SetupForm";
import Loading from "./draft/23-quiz/Loading";
import Modal from "./draft/23-quiz/Modal";
import { useGlobalContext } from "./draft/23-quiz/context";

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { correct_answer, question, incorrect_answers } = questions[index];
  const answers = [...incorrect_answers, correct_answer];
  return (
    <main>
      {/* <Modal /> */}
      <section className="quiz">
        <p className="correct-answers">
          correct answers: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, idx) => {
              return (
                <button
                  key={idx}
                  className="answer-btn"
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => {
                    checkAnswer(correct_answer === answer);
                  }}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
