import React, { useState } from 'react'
import './Buttons.scss'

function Buttons (props) {

    const {onClick, children, disabled, isPrimary } = props;
    
    const Class = isPrimary ? "primary" : disabled ? "disabled" : "secondary";
   

  return (
    <button className = {Class} disabled = {disabled} onClick={onClick} >

        {children && (<span className="Button-children">{children}</span>)}

    </button>
  );
}
 
export default Buttons;