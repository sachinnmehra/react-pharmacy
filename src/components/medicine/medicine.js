import React from "react";
import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "./medicine.css";
import AddMedicine from "./add-medicine/add-medicine";
import { connect } from "react-redux";
import Header from "../header/header";
import {
  toggleAddMedshidden,
  clearItemFromMedicine,
} from "../../Redux/add-medicine/add-meds-action";
const Medicine = ({ toggleAddMedshidden, medicine, hidden, clearItem }) => {
  return (
    <div className="Medicine">
      <Header orderPage="Order" userPage="User" medicinePage="medicine" />
      <div className="med-option">
        <h1 class="med-head">Medicine</h1>
        <Button
          onClick={toggleAddMedshidden}
          className="add-med-btn"
          variant="contained"
          color="primary"
        >
          Add medicine
        </Button>
        {hidden ? null : <AddMedicine />}
      </div>
      <table className="table med-table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Manufacturer Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Discount</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {medicine.map((item) => (
            <tr>
              <td>{item.Id}</td>
              <td>{item.name}</td>
              <td>{item.ManufacturerName}</td>
              <td>{item.Price}</td>
              <td>{item.Stock}</td>
              <td>{item.Discount}</td>
              <td>
                <button onClick={() => clearItem(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleAddMedshidden: () => dispatch(toggleAddMedshidden()),
  clearItem: (item) => dispatch(clearItemFromMedicine(item)),
});

const mapStateToProps = ({ addMedicine: { hidden, medicine } }) => ({
  hidden,
  medicine,
});
export default connect(mapStateToProps, mapDispatchToProps)(Medicine);
