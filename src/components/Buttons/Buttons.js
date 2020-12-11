import React from "react";
import "./Buttons.scss";

function Buttons(props) {
  const {
    onClick,
    children,
    disabled,
    isPrimary,
    isOutline,
    width,
    height,
    fontSize,
    backgroundColor
  } = props;

  const ClassPrimary = disabled
    ? "disabled"
    : isPrimary
    ? "primary"
    : "secondary";
  const Class = isOutline ? ClassPrimary + "-outline" : ClassPrimary;
  const style = {
    width: width,
    height: height,
    backgroundColor: backgroundColor
  };

  return (
    <button
      className={Class}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children && (
        <span className="Button-children" style={{ fontSize: fontSize }}>
          {children}
        </span>
      )}
    </button>
  );
}

export default Buttons;
