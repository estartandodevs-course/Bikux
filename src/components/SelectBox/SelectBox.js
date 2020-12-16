import React from "react";
import "./SelectBox.scss";

function SelectBox(props) {
  const { label, required, value, height, width, onChange } = props;
  const options = [
    { label: "Atendimento a cliente", value: "Atendimento a cliente" },
    { label: "Design", value: "Design" },
    { label: "Informática/T.I.", value: "Informática/T.I." },
    { label: "Secretariado", value: "Secretariado" },
  ];
  const labelRequired = required ? "*" : "";

  return (
    <div className="select-container">
      <div className="select-box">
        <label>
          {label}
          <span className="required">{labelRequired}</span>
        </label>
        <select
          style={{
            height: height,
            width: width,
          }}
          className="select"
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>
            Vamos sugerir vagas pensando nisso
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectBox;
