import React from 'react'
import logo from './assets/images/logo.svg';
import { Header } from './components'
import './styles/index.scss';
import { Vaga } from './pages/Vaga/Vaga'
import { Feed } from './pages/Feed/feed'
import { Search } from './pages/Search/search'
import  BottomNavBar  from './components/BottomNavBar/BottomNavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export function App(){
  return (
    <Router>
       <Header logo={logo} showBackButton showExitButton />
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
      </Switch>
      <BottomNavBar showAddVagaButton showHomeButton showSearchButton showNotificacionButton/>
    </Router>
  );
}

export default App;

