// import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";

// setup objects
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  auth: "Alice Schertle",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/817-Vrzp%2BtL._AC_UL200_SR200,200_.jpg",
  title: "Little Blue Truck's Valentine",
  auth: "Samantha Brooke",
};

// children props adds between close and open tags !!!
function BookList() {
  return (
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} auth={firstBook.auth}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla optio
          repudiandae eligendi voluptatem ipsa! Explicabo culpa cum perferendis
          provident quas maiores harum similique excepturi aut sequi fugit,
          error consequuntur cupiditate!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        auth={secondBook.auth}
      />
    </section>
  );
}

// name "children" is matter !!!
const Book = (props) => {
  const { img, title, auth } = props;
  console.log("props", props); // 2nd object includes children
  /* Object { img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg", title: "I Love You to the Moon and Back", auth: "Alice Schertle", children: {…} } */
  return (
    <article className="book">
      <img className="img" src={img} alt="book" />
      <h3>{title}</h3>
      <h4>{auth}</h4>
      {props.children}
    </article>
  );
};

createRoot(document.getElementById("root")).render(<BookList />);
