import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import Logo from "./components/Navbar-component/logo.png";
import Navigation from "./components/Navbar-component/Navigation.component";
import ProductCardList from "./components/ProductCard-component/ProductCardList.component";
import SingleProduct from "./components/SingeProduct-component/SingleProduct.component";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Navigation logo={Logo}/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductCardList />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  </div>
);
