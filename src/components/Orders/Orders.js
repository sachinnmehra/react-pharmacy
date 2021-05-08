import React from "react";
import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Order.css";
import AddOrder from "./Addorder";
import { connect } from "react-redux";
import {
  toggleAddOrderHidden,
  clearItemFromOrders,
  searchOrder,
} from "../../Redux/add-orders/action";
import Header from "../header/header";

const Order = ({
  toggleAddOrderHidden,
  order,
  hidden,
  clearItem,
  searchItem,
}) => {
  const handleSearchChange = (event) => {
    searchItem(event.target.value);
  };
  return (
    <div className="orders">
      <Header orderPage="Order" />
      <div className="order-option">
        <h1 class="order-head">ORDERS</h1>
        <input
          onChange={handleSearchChange}
          className="order__searchbar"
          placeholder="Search"
        />
        <Button
          onClick={toggleAddOrderHidden}
          className="add-order-btn"
          variant="contained"
          color="primary"
        >
          Add Order
        </Button>
        {hidden ? null : <AddOrder />}
      </div>
      <table className="table order-table">
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Customer Conatact No.</th>
            <th scope="col">Products</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item) => (
            <tr>
              <td>{item.orderId}</td>
              <td>{item.cName}</td>
              <td>{item.customerContactNo}</td>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>{item.totalAmount}</td>
              <td>
                <Button
                  onClick={() => clearItem(item)}
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
  toggleAddOrderHidden: () => dispatch(toggleAddOrderHidden()),
  clearItem: (item) => dispatch(clearItemFromOrders(item)),
  searchItem: (item) => dispatch(searchOrder(item)),
});

const mapStateToProps = ({ addOrder: { hidden, order } }) => ({
  hidden,
  order,
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);
