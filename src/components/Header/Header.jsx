import React from 'react'

const Header = ({ showExitButton, showBackButton, isSearchPage }) => {
  return (
    <header className="Header">
      {showBackButton && (<a>back button</a>)}
      
    </header>
  );
}
 
export default Header;