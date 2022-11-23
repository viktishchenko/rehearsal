/* imrse */
import { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, idx, colorHex }) => {
  const [alert, setAlert] = useState(false);
  /* get hex from api, construct string */
  const hexValue = `#${colorHex}`;

  /* Array to string [1,2,3] → 1,2,3 */
  const bgc = rgb.join(",");
  /* get hex by convert w utils */
  const hex = rgbToHex(...rgb);

  return (
    <article
      className={`color ${idx > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};

export default SingleColor;
