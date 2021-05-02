import React, { Component } from "react";
import FormInput from "../../form-input/form-input";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import {
  toggleAddMedshidden,
  addMedicines,
} from "../../../Redux/add-medicine/add-meds-action";

class addMedicine extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.medicine[name] = value;
  };
  render() {
    console.log(this.props.medicine);
    return (
      <div className="add-medicine">
        <i
          onClick={this.props.toggleAddMedshidden}
          class="fas fa-times-circle"
        ></i>
        <h1>ADD MEDICINE</h1>

        <div className="form">
          <FormInput
            onChange={this.handleChange}
            className="add-med-form"
            name="name"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-med-form"
            name="ManufacturerName"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-med-form"
            name="Price"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-med-form"
            name="Stock"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-med-form"
            name="Discount"
          />
        </div>
        <Button
          onClick={() => this.props.addMedicines(this.props.medicine)}
          className="add-med-form"
          variant="contained"
          color="primary"
        >
          Add Medicine
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleAddMedshidden: () => dispatch(toggleAddMedshidden()),
  addMedicines: (item) => dispatch(addMedicines(item)),
});

const mapStateToProps = ({ addMedicine: { hidden, medicine } }) => ({
  hidden,
  medicine,
});
export default connect(mapStateToProps, mapDispatchToProps)(addMedicine);
