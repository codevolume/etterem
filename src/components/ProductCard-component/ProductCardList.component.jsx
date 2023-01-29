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

          {/*
          <ProductCard
            key="1"
            image="https://media.mcdonalds.hu/storage/55/74/pinkyburger_product_list-product_list_image.png"
            title="Pinky burger"
          />
          <ProductCard
            image="https://media.mcdonalds.hu/storage/64/52/bbqbob_list-product_list_image.png"
            title="BBQ BOB"
          />
          <ProductCard
            image="https://media.mcdonalds.hu/storage/26/52/termeklista_kepek_sajtburger-product_list_image.png"
            title="Sajtburger"
          />
          <ProductCard
            image="https://media.mcdonalds.hu/storage/49/74/termeklista_shake_kaves-product_list_image.png"
            title="Kaves shake"
          />
          <ProductCard
            image="https://media.mcdonalds.hu/storage/43/76/kozepesburgonya-product_list_image-product_list_image.png"
            title="Burgonya"
          />
          <ProductCard
            image="https://media.mcdonalds.hu/storage/65/56/cocacola_list-product_list_image.png"
            title="Coca-cola"
          />
  */}
        </div>
        <h1>végére értél</h1>
      </section>
    </div>
  );
};

export default ProductCardList;
