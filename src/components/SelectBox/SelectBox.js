import React from "react";
import "./SelectBox.scss";

function SelectBox(props) {
  const { label, required, value, height, width, onChange, options } = props;
  const labelRequired = required ? "*" : "";

  return (
    <div className="select-container">
      <div className="select-box">
        <label>
          {label}
          <span className="required">{labelRequired}</span>
        </label>
        <select
          style={{
            height: height,
            width: width,
          }}
          className="select"
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectBox;
