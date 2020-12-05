import React from 'react'
import './Buttons.scss'

function Buttons (props) {

    const {onClick, children, disabled, isPrimary, isOutline, width, height} = props;
    
    const ClassPrimary = disabled ? "disabled" : isPrimary ? "primary" : "secondary";
    const Class = isOutline ? ClassPrimary + "-outline" : ClassPrimary;
    const size = {
      width: width,
      height: height
    };

  return (
    <button className = {Class} disabled = {disabled} onClick={onClick} style = {size} >

        {children && (<span className="Button-children">{children}</span>)}

    </button>
  );
}
 
export default Buttons;