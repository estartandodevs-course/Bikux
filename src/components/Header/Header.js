import React from "react";
import { ActionButton, SearchInput } from "../index";
import { useHistory } from "react-router-dom";
import firebase from "../../firebaseConfig";
import "./Header.scss";

const Header = ({
  showExitButton,
  showBackButton,
  isSearchPage,
  logo,
  onChangeSearch,
  onSearch,
}) => {
  const history = useHistory();

  
 function handleLogout () {
    firebase.auth().signOut();
    history.push("/login")
  }


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
            onClick={handleLogout}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
