import React from 'react'
import './SelectBox.scss'

function SelectBox(props) {
    const {label, options = [], height, width, onChange} = props;  
    return (
        <div className="select-container">
            <div className ="select-box">
                <label>{label}</label>
                <select
                style={{
                    height: height,
                    width: width
                }} 
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

