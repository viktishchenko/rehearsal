import SetupForm from "./draft/23-quiz/SetupForm";
import Loading from "./draft/23-quiz/Loading";
import Modal from "./draft/23-quiz/Modal";
import { useGlobalContext } from "./draft/23-quiz/context";

function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <h2>quiz project</h2>
    </>
  );
}

export default App;
