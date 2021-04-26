import React from "react";
import "./form-input.css";
const FormInput = ({ type, name, label, ...otherProps }) => {
  return (
    <div className="group">
      <label className="form-input-label">{label}</label>
      <input
        className="form-input"
        type={type}
        name={name}
        placeholder={name}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
