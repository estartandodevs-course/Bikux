import React from "react";
import { ActionButton, SearchInput } from "../index";
import { useHistory } from "react-router-dom";
import "./Header.scss";

<<<<<<< HEAD
const Header = ({  showBackButton, isSearchPage, logo, showExitButton }) => {
  
=======
const Header = ({
  showExitButton,
  showBackButton,
  isSearchPage,
  logo,
  onChangeSearch,
  onSearch,
}) => {
>>>>>>> 6eeb3a89567c97b3f209765ab0b8d0d5765b21e5
  const history = useHistory();
  return (
    <header className="Header">
      <div className="action-btn-place">
        {showBackButton && (
          <ActionButton icon="020-prev" onClick={() => history.goBack()} />
        )}
      </div>
      <div className="main">
        {isSearchPage ? (
          <SearchInput onChange={onChangeSearch} onSearch={onSearch} />
        ) : (
          <img src={logo} className="logo" alt="logo" />
        )}
      </div>

      <div className="action-btn-place">
        {showExitButton && (
          <ActionButton
            icon="022-exit"
            onClick={() => history.push("/login")
          }
          />
        )}
      </div>
    </header>
  );
};

export default Header;
