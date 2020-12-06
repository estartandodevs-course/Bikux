import React from "react";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import Header from "../Header/Header";
import logo from "../../assets/images/logo.svg";

const Layout = (props) => {
  const { showHeader, showBottomNavBar, children } = props;
  return (
    <>
      {showHeader && <Header logo={logo} showBackButton showExitButton />}
      {children}
      {showBottomNavBar && <BottomNavBar />}
    </>
  );
};

export default Layout;
