import React from 'react'
import './SelectBox.scss'

function SelectBox(props) {
    const {label, options = [], required, height, width, onChange} = props; 
    const labelRequired = required ? '*' : "";

    return (
        <div className="select-container">
            <div className ="select-box">
                <label>{label}<span className="required">{labelRequired}</span></label>
                <select
                style={{
                    height: height,
                    width: width
                }} 
                className="select"
                onChange={onChange}
                >
                    {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default SelectBox;

