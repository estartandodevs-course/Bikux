import React from 'react'
import './Buttons.scss'

function Buttons (props) {

    const {onClick, children, disabled, isPrimary, isOutline} = props;
    
    const ClassPrimary = disabled ? "disabled" : isPrimary ? "primary" : "secondary";
    const Class = isOutline ? ClassPrimary + "-outline" : ClassPrimary;

  return (
    <button className = {Class} disabled = {disabled} onClick={onClick} >

        {children && (<span className="Button-children">{children}</span>)}

    </button>
  );
}
 
export default Buttons;