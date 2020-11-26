import React from 'react'
import { ActionButton } from '../index'
import './SearchInput.scss'

const SearchInput = ({ onSearch }) => {
  return (
    <div className="SearchInput">
      <input
        type="text"
        placeholder="Pesquise uma vaga"
        onChange={e => setSearchedTerm(e.target.value)}
        className="searchField"
      />
      <ActionButton icon="008-buscar" iconSize={16} onClick={onSearch} />
    </div>
  );
}
 
export default SearchInput;
