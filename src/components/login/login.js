import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import { Button } from "@material-ui/core";
import "./login.css";
import { Redirect, Link } from "react-router";
import Header from "../header/header";

class loginPage extends Component {
  state = {
    username: "",
    password: "",
    isLoggedIn: false,
    loginId: 0,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (password !== username) {
      alert("password did't match");
    } else if (username === "test-admin" && password === "test-admin") {
      alert("login Succesfull");
      this.setState({
        isLoggedIn: !this.state.isLoggedIn,
        loginId: 1,
      });
    } else if (username === "test-sales" && password === "test-sales") {
      alert("login Succesfull");
      this.setState({
        isLoggedIn: !this.state.isLoggedIn,
        loginId: 2,
      });
    } else {
      alert("wrong credientials");
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.state);

    let { username, password, loginId } = this.state;
    return (
      <div className="login">
        <h1>PHARMACY</h1>
        {/* <Header /> */}
        {/* <Header isLoggedIn={this.state.isLoggedIn} /> */}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            value={username}
            type="text"
            name="username"
            label="UserName"
          />
          <FormInput
            onChange={this.handleChange}
            value={password}
            type="password"
            name="password"
            label="Password"
          />
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
        {this.state.isLoggedIn ? (
          <Redirect to={loginId === 1 ? "/admin" : "/sales"} />
        ) : null}
      </div>
    );
  }
}
export default loginPage;
