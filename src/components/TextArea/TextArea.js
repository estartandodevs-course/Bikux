import React from "react";
import "./TextArea.scss";

function TextArea(props) {
  const {
    label,
    placeholder,
    height,
    width,
    onChange,
    backgroundColor,
    borderNone,
    name,
  } = props;

  return (
    <div className="textarea-container">
      <div className="textarea">
        <label>{label}</label>
        <textarea
          style={{
            height: height,
            width: width,
            backgroundColor: backgroundColor,
            border: borderNone,
          }}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
}

export default TextArea;
