import React from "react";
import "./SelectField.scss";

function SelectField(props) {
  const { label, required, onChange, value } = props;
  const labelRequired = required ? "*" : "";
  const options = [
    "Atendimento a cliente",
    "Design",
    "Informática/T.I.",
    "Secretariado",
  ];

  return (
    <div className="select-container">
      <div className="select-field">
        <label htmlFor="select">
          {label}
          <span className="required">{labelRequired}</span>
        </label>
        <select value={value} onChange={onChange} id="select">
          <option value="" disabled>
            Vamos sugerir vagas pensando nisso
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectField;
