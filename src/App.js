import React from "react";
import logo from "./assets/images/logo.svg";
import { Header } from "./components";
import "./styles/index.scss";
import { Vaga } from "./pages/Vaga/Vaga";
import { Feed } from "./pages/Feed/Feed";
import { Search } from "./pages/Search/Search";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";
import { InputField } from "./components/inputField/inputField";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function App() {
  return (
  <div>
      <Header logo={logo} showBackButton showExitButton />
      <InputField 
      type="email" 
      placeholder="Por aqui que vamos te avisar das novidades!" 
      required="required" 
      label="E-mail"/>
      
      </div>    
  );
}

export default App;
