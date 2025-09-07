import React from "react";
import logo from "../assets/Group 2.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__part logo__img" src={logo} alt="" />
      <p className="logo__part logo__text">Hobo shop</p>
    </div>
  );
};

export default Logo;
