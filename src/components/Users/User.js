import React from "react";
import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css";
import AddUser from "./AddUser";
import { connect } from "react-redux";
import {
  toggleAddUserHidden,
  removeUser,
  searchUser,
} from "../../Redux/add-user/action";
import Header from "../header/header";
const User = ({
  toggleAddUserHidden,
  user,
  hidden,
  removeUser,
  searchUser,
}) => {
  const handleSearchChange = (event) => {
    searchUser(event.target.value);
  };
  return (
    <div className="users">
      <Header orderPage="Order" userPage="User" medicinePage="medicine" />
      <div className="user-option">
        <h1 class="user-head">USERS</h1>
        <input
          onChange={handleSearchChange}
          className="user__searchbar"
          placeholder="Search"
        />

        <Button
          onClick={toggleAddUserHidden}
          className="add-user-btn"
          variant="contained"
          color="primary"
        >
          Add user
        </Button>
        {hidden ? null : <AddUser />}
      </div>
      <table className="table user-table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Gender</th>
            <th scope="col">Year Experience</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr>
              <td>{item.Id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.dob}</td>
              <td>{item.gender}</td>
              <td>{item.yearExperience}</td>
              <td>
                <Button
                  onClick={() => removeUser(item)}
                  variant="contained"
                  color="Secondary"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleAddUserHidden: () => dispatch(toggleAddUserHidden()),
  removeUser: (user) => dispatch(removeUser(user)),
  searchUser: (user) => dispatch(searchUser(user)),
});

const mapStateToProps = ({ addUser: { hidden, user } }) => ({
  hidden,
  user,
});
export default connect(mapStateToProps, mapDispatchToProps)(User);
