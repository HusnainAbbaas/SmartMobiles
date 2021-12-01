import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./Home.css";

const ProductCard = ({ product }) => {
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} />
      <p>{product.brandname}</p>
      <p>{product.phonename}</p>

      <span>{`Rs:  ${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
