import React from 'react'
import { Icon } from '../index'
import './ActionButton.scss'

const ActionButton = ({ icon, iconSize, onClick, children, disabled }) => {
  return (
    <button className="ActionButton" disabled={disabled} onClick={onClick}>
      <div className="content">
        {icon && (<Icon name={icon} size={iconSize} />)}
        {children && (<span className="label">{children}</span>)}
      </div>
    </button>
  );
}
 
export default ActionButton;