// imr, ipt
import React from "react";
import propTypes from "prop-types";

const Product = ({ image, name, price }) => {
  /* 
    CHECK DATA WITH propsTypes: image, name, price
  */

  console.log("image,name,price>>", image, name, price);
  return (
    <article className="product">
      <h4>single product</h4>
      {/* <img src={image.url} alt={name} />
      <h4>{name}</h4>
      <p>$ {price}</p> */}
    </article>
  );
};

Product.propTypes = {
  image: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

export default Product;
