import React from "react";
import { ActionButton, SearchInput } from "../index";
import { useHistory } from "react-router-dom";
import "./Header.scss";

const Header = ({ showExitButton, showBackButton, isSearchPage, logo }) => {
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
          <SearchInput onSearch={() => console.log("ban")} />
        ) : (
          <img src={logo} className="logo" alt="logo" />
        )}
      </div>
      <div className="action-btn-place">
        {showExitButton && (
          <ActionButton
            icon="022-exit"
            onClick={() => history.push("/login")}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
