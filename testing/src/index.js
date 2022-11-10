import { createRoot } from "react-dom/client";
import Bookomba from "./Book"; // export default
import { books } from "./data"; // export
import { greeting as shmule } from "./testing/testing.js";

// CSS
import "./index.css";

function BookList() {
  console.log("shmule>>", shmule);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Bookomba key={book.id} {...book} />;
      })}
    </section>
  );
}

createRoot(document.getElementById("root")).render(<BookList />);
