// import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// const Greeting = () => {
//   return React.createElement("div", {}, React.createElement("h1", {}, "halo"));
// };

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
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    className="img"
    src="https://images-na.ssl-images-amazon.com/images/I/914QgVSAVTL._AC_UL200_SR200,200_.jpg"
    alt="book"
  />
);
const Title = () => <h3>Little Blue Truck's Halloween: A Halloween </h3>;
const Author = () => <h4>Alice Schertle</h4>;

createRoot(document.getElementById("root")).render(<BookList />);
