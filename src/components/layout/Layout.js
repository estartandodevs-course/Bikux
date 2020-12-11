import React from "react";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import Header from "../Header/Header";
import logo from "../../assets/images/logo.svg";

const Layout = (props) => {
  const { showHeader, showBottomNavBar, children } = props;

  /* const isLoggedIn = firebase.auth().onAuthStateChanged(function(user){
    if (user) {
      return true
    } else {
      return false
    }
  })*/ 


  const isLoggedIn = false;

  const headerKind = isLoggedIn ? (
    <>
      {showHeader && <Header logo={logo} showBackButton showExitButton />}
    </>
  ) : (
    <>
    {showHeader && <Header logo={logo} showBackButton />}
    </>
  );

  return (
    <>
    {headerKind}
    {children}
    {showBottomNavBar && <BottomNavBar />}
    </>
  );
};

export default Layout;
