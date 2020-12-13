import React from "react";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import Header from "../Header/Header";
import logo from "../../assets/images/logo.svg";
import firebase from "../../firebaseConfig";

const Layout = (props) => {
  const { showHeader, showBottomNavBar, children } = props;

  var isLoggedIn = firebase.auth().currentUser

  const headerKind = isLoggedIn != null ? (
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
