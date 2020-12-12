import React from "react";
import { ActionButton, SearchInput } from "../index";
import { useHistory } from "react-router-dom";
import "./Header.scss";
import { logout } from "../../services/auth.service";

const Header = ({
  showExitButton,
  showBackButton,
  isSearchPage,
  logo,
  onChangeSearch,
  onSearch,
}) => {
  const history = useHistory();


  async function handleLogout() {
    const response = await logout();
    if (response.success) {
      history.push("/login")
    }
    else {
      alert(response.data.message);
    }
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