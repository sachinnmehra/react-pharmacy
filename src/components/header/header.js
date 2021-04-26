import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="option">
        <Link to="/order">Order</Link>

        <Link to="/">Sign in</Link>
      </div>
    </div>
  );
};

export default Header;
