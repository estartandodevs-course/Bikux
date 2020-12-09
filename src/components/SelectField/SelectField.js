import React from "react";
import "./SelectField.scss";

function SelectField(props) {
  const { label, required, height, width, onChange, value, children } = props;
  const labelRequired = required ? "*" : "";

  return (
    <div className="select-container">
      <div className="select-field">
        <label>
          {label}
          <span className="required">{labelRequired}</span>
        </label>
        <select>
          <option
            value={value}
            style={{
              height: height,
              width: width,
            }}
            onChange={onChange}
          >
            {children}
          </option>
        </select>
      </div>
    </div>
  );
}

export default SelectField;
