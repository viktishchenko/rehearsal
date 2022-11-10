// import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";

const books = [
  {
    id: 1,
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    title: "Little Blue Truck's Valentine",
    author: "Alice Schertle",
    img: "https://images-na.ssl-images-amazon.com/images/I/817-Vrzp%2BtL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    title: "Golden Girls: Goodnight, Girls",
    author: "Samantha Brooke",
    img: "https://images-na.ssl-images-amazon.com/images/I/914QgVSAVTL._AC_UL200_SR200,200_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img className="img" src={img} alt="book alt text" />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  );
};

createRoot(document.getElementById("root")).render(<BookList />);
