import React from "react";
import FilterByCategory from "../FilterByCategory-component/FilterByCategory.component";
import products from "../../data/products.js";
import "../../styles/card.product.css";

const ProductCardList = () => {
  return (
    <div>
      <h1 className="section-title">ajánlataink</h1>
      <section id="products">
        <FilterByCategory />
        <div className="Cards row justify-content-center mx-auto">
          {products.map((product) => {
            return (
              <div
                className="product-card col-lg-4 col-md-6 col-sm-12"
                key={product.id}
              >
                <a href={`/product/${product.id}`}>
                  <div className="content">
                    <img src={product.image} alt={product.name} />
                    <div className="text-content">
                      <h3 className="title">{product.name}</h3>
                      <p className="subtitle">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <h1>végére értél</h1>
      </section>
    </div>
  );
};

export default ProductCardList;
