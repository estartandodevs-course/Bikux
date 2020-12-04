import React from 'react'
import { useState } from 'react';
import './inputField.scss'

export function InputField(props) {
    const {label, type, placeholder, required, height, width} = props;                  
    const labelRequired = required === "required" ? '*' : "";
    const [value, setValue] = useState("");

    function onChange (event) {
        setValue(event.target.value);
    }
   
    return (
        <div className="input-container">
            <div class="input-field">
                <label>{label}<span className="required">{labelRequired}</span></label>
                <input 
                style={{
                    height: height,
                    width: width
                }} 
                onChange={onChange}
                type={type} 
                placeholder={placeholder} 
                required={required}>
                </input>
            </div>
        </div>
    )
}

