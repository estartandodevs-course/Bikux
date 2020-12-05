import React from "react";
import logo from "./assets/images/logo.svg";
import { Header } from "./components";
import "./styles/index.scss";
import TextArea from "./components/TextArea/TextArea"
/*import { Vaga } from "./pages/Vaga/Vaga";
import { Feed } from "./pages/Feed/Feed";
import { Search } from "./pages/Search/Search";
import { JobDetailsPage } from "./pages/JobDetailsPage/JobDetailsPage";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";
import NoMatch from "./pages/NoMatch/NoMatch"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";*/

export function App() {
  return (
    <TextArea
    label="Detalhes da vaga" 
    placeholder="Ex.: Procuramos caixa para o período da manhã, 
    não necessita experiência.
    Oferecemos salário compatível,VA, VT, AM, AO.
    Desejável que more próximo."
    />
  );
}

export default App;