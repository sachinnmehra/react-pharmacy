import React from "react";
import Header from "../header/header";
import Order from "../Orders/Orders";
const Admin = () => {
  return (
    <div className="admin">
      <Header orderPage="Order" userPage="User" medicinePage="medicine" />
      <h1 style={{ marginTop: "50px" }}>Welcome 🙂 </h1>
    </div>
  );
};

export default Admin;
