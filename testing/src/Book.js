const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img className="img" src={img} alt="book alt text" />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
