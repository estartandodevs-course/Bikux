import React from "react";
import logo from "./assets/images/logo.svg";
import "./styles/index.scss";
import  { Vaga, Feed, Search, JobDetailsPage, NoMatch, Login, Cadastro } from "./pages/index";     
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
