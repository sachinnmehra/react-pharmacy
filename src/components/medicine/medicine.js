import React from "react";
import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "./medicine.css";
import AddMedicine from "./add-medicine/add-medicine";
import { connect } from "react-redux";
import { toggleAddMedshidden } from "../../Redux/add-medicine/add-meds-action";
const Medicine = ({ toggleAddMedshidden, hidden }) => {
  return (
    <div className="Medicine">
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
            <th scope="col">Name</th>
            <th scope="col">Manufacturer Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Discount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>disprin</td>
            <td>avil</td>
            <td>O</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleAddMedshidden: () => dispatch(toggleAddMedshidden()),
});

const mapStateToProps = ({ addMedicine: { hidden } }) => ({
  hidden,
});
export default connect(mapStateToProps, mapDispatchToProps)(Medicine);
