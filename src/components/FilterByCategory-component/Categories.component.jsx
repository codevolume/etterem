import React from "react";
import categories from "../../data/categories.js";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategoryFilterid: '1'
    }
  }

  render() {
    return (
      <div className="filter-wrapper">
        {categories.map((category) => {
          return(
            <div className="filter-item" key={category.id}>
            <img
              src={category.image}
              alt={category.name}
            />
            <h3>{category.name}</h3>
          </div>
          )
        })}
        </div>
    );
  }
};

export default Categories;
