import { useState } from "react";
import {
  FaChevronCircleRight,
  FaChevronCircleLeft,
  FaQuoteRight,
} from "react-icons/fa";
import people from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="aythor">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronCircleLeft />
        </button>
        <button className="next-btn">
          <FaChevronCircleRight />
        </button>
      </div>
      <button className="random-btn">suprise me</button>
    </article>
  );
};

export default Review;
