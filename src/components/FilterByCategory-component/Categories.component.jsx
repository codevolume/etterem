import React from "react";

const Categories = () => {
  return (
    <div className="filter-wrapper">
      <div className="filter-item active">
        <img
          src="https://media.mcdonalds.hu/storage/65/92/mcmenu.png"
          alt="osszes"
        />
        <h3>Összes</h3>
      </div>
      <div className="filter-item">
        <img
          src="https://media.mcdonalds.hu/storage/52/78/kategoria-szendvics-category.png"
          alt="burgerek"
        />
        <h3>Burgerek</h3>
      </div>
      <div className="filter-item">
        <img
          src="https://media.mcdonalds.hu/storage/54/44/dig_001_weboldal_kategoria_desszert_130x106px-category.png"
          alt="desszertek"
        />
        <h3>Desszertek</h3>
      </div>
      <div className="filter-item">
        <img
          src="https://media.mcdonalds.hu/storage/65/96/kategoria_uditok-category.png"
          alt="uditok"
        />
        <h3>Üdítők</h3>
      </div>
    </div>
  );
};

export default Categories;
