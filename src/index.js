import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import Navigation from "./components/Navbar-component/Navigation.component";
import ProductCardList from "./components/ProductCard-component/ProductCardList.component";
import Reviews from "./components/Reviews-component/Reviews.component";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Navigation />
    <ProductCardList />
    <Reviews />
  </div>
);
