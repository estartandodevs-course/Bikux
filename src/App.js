import React from "react";
import logo from "./assets/images/logo.svg";
import "./styles/index.scss";
import { Vaga } from "./pages/Vaga/Vaga";
import { Feed } from "./pages/Feed/Feed";
import { Search } from "./pages/Search/Search";
import { JobDetailsPage } from "./pages/JobDetailsPage/JobDetailsPage";
import NoMatch from "./pages/NoMatch/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Cadastro/Cadastro";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Feed />
        </Route>
        <Route path="/vaga">
          <Vaga />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/login">
          <Login logo={logo} />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/detalhes/vaga/:indexOftoBeSaw">
          <JobDetailsPage />
        </Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </Router>
  );
}

export default App;
