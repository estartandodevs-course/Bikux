import React from "react";
import logo from "./assets/images/logo.svg";
import { Header } from "./components";
import "./styles/index.scss";
import SelectBox from "./components/SelectBox/SelectBox"
/*import { Vaga } from "./pages/Vaga/Vaga";
import { Feed } from "./pages/Feed/Feed";
import { Search } from "./pages/Search/Search";
import { JobDetailsPage } from "./pages/JobDetailsPage/JobDetailsPage";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";
import NoMatch from "./pages/NoMatch/NoMatch"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";*/

export function App() {

  
  return (
    <SelectBox
    label="Detalhes da vaga" 
    options = {[
      {
        label: "Vamos sugerir vagas pensando nisso",
        value: "",
      },
      {
        label: "Mango",
        value: "mango",
      },
      {
        label: "Banana",
        value: "banana",
      },
      {
        label: "Pineapple",
        value: "pineapple",
      },
    ]}
      
  
    />
  );
}

export default App;