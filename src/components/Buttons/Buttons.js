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
    img,
    backgroundColor,
    color
  } = props;

  const ClassPrimary = disabled ? "disabled": isPrimary ? "primary" : "secondary";
  const Class = isOutline ? ClassPrimary + "-outline" : ClassPrimary;
  const style = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
  };

  return (
    <button
      className={Class}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
    {img && 
      <div className = "button-img-container">
        <Icon name= {img} size="24" />
      </div>
    }

      {children && (
        <span className="Button-children" style={{ fontSize: fontSize, color: color }}>
          {children}
        </span>
      )}

    </button>
  );
}

export default Buttons;
