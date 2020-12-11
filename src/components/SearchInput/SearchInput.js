import React from "react";
import { ActionButton } from "../index";
import "./SearchInput.scss";

const SearchInput = ({ onSearch, onChange }) => {
  return (
    <div className="SearchInput">
      <input
        type="text"
        placeholder="Pesquise uma vaga"
        className="searchField"
        onChange={(event) => onChange(event.target.value)}
      />
      <ActionButton icon="008-buscar" iconSize={16} onClick={onSearch} />
    </div>
  );
};

export default SearchInput;
