import React from 'react'
import './inputField.scss'

export function InputField(props) {
    const {label, type, placeholder, required, size} = props;   
    const ast = '*'                 
    const labelRequired = required === "required" ? `${ast}`: "";

    return (
        <div className="input-text">
            <label className="label">{label}<span className="required">{labelRequired}</span></label>
            <input  className="input" 
            type={type} 
            placeholder={placeholder} 
            required={required}>
            </input>
          
        </div>

    )
}