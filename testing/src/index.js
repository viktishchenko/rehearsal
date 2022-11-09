// import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "Alice Schertle";

const Book = () => {
  const title = "Little Blue Truck's Halloween: A Halloween";
  return (
    <article className="book">
      <img
        className="img"
        src="https://images-na.ssl-images-amazon.com/images/I/914QgVSAVTL._AC_UL200_SR200,200_.jpg"
        alt="book"
      />
      <h3>{title}</h3>
      <h4>{author.toUpperCase()}</h4>
      <p>{5 + 5}</p>
    </article>
  );
};

createRoot(document.getElementById("root")).render(<BookList />);
