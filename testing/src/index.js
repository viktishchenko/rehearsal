// import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";

// setup vars
const author = "Alice Schertle";
const title = "Little Blue Truck's Halloween: A Halloween";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/914QgVSAVTL._AC_UL200_SR200,200_.jpg";

function BookList(shakeAndBake) {
  console.log("shakeAndBake", shakeAndBake); // {}
  return (
    <section className="booklist">
      {/*
      props >> Object { job: "developer" }
       */}
      <Book job="developer" />
      {/* 
      props >> Object { title: "random", number: 22 }
       */}
      <Book title="random" number={20 + 2} />
    </section>
  );
}

const Book = (props) => {
  console.log("props", props); // {}
  return (
    <article className="book">
      <img className="img" src={img} alt="book" />
      <h3>{title}</h3>
      <h4>{author.toUpperCase()}</h4>
      <p>{5 + 5}</p>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

createRoot(document.getElementById("root")).render(<BookList />);
