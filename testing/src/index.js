// import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";

// setup objects
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/914QgVSAVTL._AC_UL200_SR200,200_.jpg",
  title: "Little Blue Truck's Halloween: A Halloween",
  auth: "Alice Schertle",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/914QgVSAVTL._AC_UL200_SR200,200_.jpg",
  title: "Little Blue Truck's Valentine",
  auth: "Samantha Brooke",
};

function BookList(shakeAndBake) {
  console.log("shakeAndBake", shakeAndBake); // {}
  return (
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} auth={firstBook.auth} />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        auth={secondBook.auth}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img className="img" src={props.img} alt="book" />
      <h3>{props.title}</h3>
      <h4>{props.auth}</h4>
    </article>
  );
};

createRoot(document.getElementById("root")).render(<BookList />);
