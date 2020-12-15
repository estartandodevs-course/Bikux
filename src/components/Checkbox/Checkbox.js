import React from "react";
import "./Checkbox.scss";

function Checkbox(props) {
  const { label, type, height, width, onChange, id, htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className="checkbox-container">
      {label}
      <input
        style={{
          height: height,
          width: width,
        }}
        onChange={onChange}
        type={type}
        id={id}
      ></input>
      <span className="checkmark" />
    </label>
  );
}

export default Checkbox;
