import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import { Button } from "@material-ui/core";
import { toggleAddUserHidden, addUser } from "../../Redux/add-user/action";
import { connect } from "react-redux";
class AddUser extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.user[name] = value;
  };
  render() {
    return (
      <div className="add-order">
        <i
          onClick={this.props.toggleAddUserHidden}
          class="fas fa-times-circle"
        ></i>
        <h1>ADD USER</h1>

        <div className="form">
          <FormInput
            onChange={this.handleChange}
            className="add-order-form"
            name="firstName"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-order-form"
            name="lastName"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-order-form"
            name="dob"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-order-form"
            name="gender"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-order-form"
            name="yearExperience"
          />
        </div>
        <Button
          onClick={() => this.props.addUser(this.props.user)}
          className="add-order-form"
          variant="contained"
          color="primary"
        >
          Add Order
        </Button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  toggleAddUserHidden: () => dispatch(toggleAddUserHidden()),
  addUser: (item) => dispatch(addUser(item)),
});

const mapStateToProps = ({ addUser: { hidden, user } }) => ({
  hidden,
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
