// imr, ipt
import React from "react";
import propTypes from "prop-types";
import defaultImage from "../../assets/default-image.jpeg";

const Product = ({
  image,
  name,
  price,
  // image = { defaultImage },
  // name = "default name",
  // price = 3.55,
}) => {
  /* 
    CHECK DATA WITH propsTypes: image, name, price
  */

  // console.log("image>>", image);
  // const url = image && image.url;
  // console.log("url>>", url);

  return (
    <article className="product">
      <img src={image.url || defaultImage} alt={name} />
      {/* <img src={image.url || defaultImage} alt={name || "default name"} /> */}
      {/* <img src={url || defaultImage} alt={name || "default name"} /> */}
      {/* {image.url ? <img src={image.url} alt={name} /> : "not found"} */}
      <h4>{name}</h4>
      <p>$ {price}</p>
    </article>
  );
};

Product.propTypes = {
  image: propTypes.object.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

// add default props
Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: { defaultImage },
};

export default Product;
