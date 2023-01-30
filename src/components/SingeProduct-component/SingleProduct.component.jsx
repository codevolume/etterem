import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.js";

const SingleProduct = () => {
  const params = useParams();
  const id = params.productId;
  const productById = products.find((product) => product.id === id);
  return (
    <div>
      <img src={productById.image} alt={productById.name} />
      <h3>{productById.name}</h3>
      <p>{productById.subtitle}</p>
    </div>
  );
};

export default SingleProduct;
