import { useState } from "react";

const Tour = (tour) => {
  const [readMore, setReadMore] = useState(false);

  const { name, image, info, price } = tour;

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">$ {price}</div>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? `show less` : `read more`}
          </button>
        </p>
        <button className="delete-btn">not interesting</button>
      </footer>
    </article>
  );
};

export default Tour;
