import React from "react";
import "./inputField.scss";

function InputField(props) {
  const { label, type, placeholder, required, height, width, onChange, InputError, value } = props;
  const labelRequired = required ? "*" : "";
  const InputErrorStyle = InputError ? "error" : "input";
 

  return (
    <div className="input-container">
      <div className="input-field">
        <label>
          {label}
          <span className="required">{labelRequired}</span>
        </label>
        <input
          className = {InputErrorStyle}
          style={{
            height: height,
            width: width,
          }}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          required={required}
          value = {value}
        ></input>
      </div>
    </div>
  );
}

export default InputField;
