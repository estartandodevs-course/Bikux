import React from 'react'
import './inputField.scss'

function InputField(props) {
    const {label, type, placeholder, required, height, width, onChange} = props;                  
    const labelRequired = required === "required" ? '*' : "";

   
    return (
        <div className="input-container">
            <div className ="input-field">
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

export default InputField;

