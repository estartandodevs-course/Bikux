import React from "react";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import Header from "../Header/Header";
import logo from "../../assets/images/logo.svg";
//import { IsLoggedIn } from "../../services/auth.service";

const Layout = (props) => {
  const { showHeader, showBottomNavBar, children } = props;
  //let isLoggedIn = IsLoggedIn();

  //let ShowExitButton = isLoggedIn ?  true :  false;


  return (
    <>
    {showHeader && <Header logo={logo} showBackButton showExitButton/>}
    {children}
    {showBottomNavBar && <BottomNavBar />}
    </>
  );
};

export default Layout;
