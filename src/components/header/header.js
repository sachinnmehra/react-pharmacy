import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleLoginPage } from "../../Redux/login/loginAction";
const Header = ({
  toggleLoginPage,
  isLoggedIn,
  orderPage,
  userPage,
  medicinePage,
  type,
}) => {
  console.log("header", window.location);
  return (
    <div className="header">
      <Logo />
      <div className="option">
        <Link to="/order">{orderPage}</Link>
        <Link to="/user">{userPage}</Link>
        <Link to="/medicine">{medicinePage}</Link>
        {<Link to="/">{isLoggedIn ? "Sign In" : "Sign out"}</Link>}
      </div>
    </div>
  );
};

const mapStateToProps = ({ addUser: { isLoggedIn } }) => ({
  isLoggedIn,
});
const mapDispatchToProps = (dispatch) => ({
  toggleLoginPage: () => dispatch(toggleLoginPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
