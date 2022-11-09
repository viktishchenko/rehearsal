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

const Book = () => {
  return (
    <article className="book">
      <img
        className="img"
        src="https://images-na.ssl-images-amazon.com/images/I/914QgVSAVTL._AC_UL200_SR200,200_.jpg"
        alt="book"
      />
      <h3>Little Blue Truck's Halloween: A Halloween </h3>
      <h4>Alice Schertle</h4>
    </article>
  );
};

createRoot(document.getElementById("root")).render(<BookList />);
