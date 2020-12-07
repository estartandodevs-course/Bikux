import React from "react";
import { Icon } from "../index";
import "./ActionButton.scss";

const ActionButton = ({
  icon,
  iconSize,
  onClick,
  children,
  disabled,
  isReverse,
}) => {
  return (
    <button className="ActionButton" disabled={disabled} onClick={onClick}>
      <div className="content">
        {icon && !isReverse && <Icon name={icon} size={iconSize} />}
        {children && <span className="label">{children}</span>}
        {icon && isReverse && <Icon name={icon} size={iconSize} />}
      </div>
    </button>
  );
};

export default ActionButton;
