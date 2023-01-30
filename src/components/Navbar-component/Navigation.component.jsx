import React from "react";
import "../../styles/navigation.css";

const Navigation = ({ logo }) => {
  return (
    <nav>
      <div className="navbar-image">
        <a href="/"><img src={logo} alt="LOGO" /></a>
      </div>
      <h1 className="navbar-title">étterem</h1>
    </nav>
  );
};
export default Navigation;
