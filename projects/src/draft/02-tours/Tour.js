const Tour = (tour) => {
  const { name, image, info, price } = tour;
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">$ {price}</div>
        </div>
        <p>{info}</p>
        <button className="delete-btn">not interesting</button>
      </footer>
    </article>
  );
};

export default Tour;
