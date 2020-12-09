import React from "react";
import {Icon} from "../index";
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
    img
  } = props;

  const ClassPrimary = disabled ? "disabled": isPrimary ? "primary" : "secondary";
  const Class = isOutline ? ClassPrimary + "-outline" : ClassPrimary;
  const size = {
    width: width,
    height: height,
  };

  return (
    <button
      className={Class}
      disabled={disabled}
      onClick={onClick}
      style={size}
    >
    {img && 
      <div className = "button-img-container">
        <Icon name= {img} size="24" />
      </div>
    }

      {children && (
        <span className="Button-children" style={{ fontSize: fontSize }}>
          {children}
        </span>
      )}

    </button>
  );
}

export default Buttons;
