import React from "react";
import FormInput from "../../form-input/form-input";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { toggleAddMedshidden } from "../../../Redux/add-medicine/add-meds-action";
const addMedicine = ({ toggleAddMedshidden }) => {
  return (
    <div className="add-medicine">
      <i onClick={toggleAddMedshidden} class="fas fa-times-circle"></i>
      <h1>ADD MEDICINE</h1>

      <div className="form">
        <FormInput className="add-med-form" name="Name" />
        <FormInput className="add-med-form" name="Manufacturer Name" />
        <FormInput className="add-med-form" name="Price" />
        <FormInput className="add-med-form" name="Stock" />
        <FormInput className="add-med-form" name="Discount" />
      </div>
      <Button
        onClick={toggleAddMedshidden}
        className="add-med-form"
        variant="contained"
        color="primary"
      >
        Add Medicine
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleAddMedshidden: () => dispatch(toggleAddMedshidden()),
});

const mapStateToProps = ({ addMedicine: { hidden, medicine } }) => ({
  hidden,
  medicine,
});
export default connect(mapStateToProps, mapDispatchToProps)(addMedicine);
