import React, { Component } from "react";
import FormInput from "../form-input/form-input";
import { Button } from "@material-ui/core";
import { toggleAddOrderHidden, addOrders } from "../../Redux/add-orders/action";
import { connect } from "react-redux";
class addOrder extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.order[name] = value;
  };
  render() {
    return (
      <div className="add-order">
        <i
          onClick={this.props.toggleAddOrderHidden}
          class="fas fa-times-circle"
        ></i>
        <h1>ADD ORDER</h1>

        <div className="form">
          <FormInput
            onChange={this.handleChange}
            className="add-order-form"
            name="orderId"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-order-form"
            name="cName"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-order-form"
            name="customerContactNo"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-order-form"
            name="product"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-order-form"
            name="quantity"
          />
          <FormInput
            onChange={this.handleChange}
            className="add-order-form"
            name="totalAmount"
          />
        </div>
        <Button
          onClick={() => this.props.addOrders(this.props.order)}
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
  toggleAddOrderHidden: () => dispatch(toggleAddOrderHidden()),
  addOrders: (item) => dispatch(addOrders(item)),
});

const mapStateToProps = ({ addOrder: { hidden, order } }) => ({
  hidden,
  order,
});

export default connect(mapStateToProps, mapDispatchToProps)(addOrder);
