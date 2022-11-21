import Review from "./draft/03-reviews/Review";
import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <>
      <h2>
        reviews <FaBeer className="icon" />
      </h2>
      <Review />
    </>
  );
}

export default App;
