import React from 'react'
import './App.css';
import logo from './assets/images/logo.svg';
import { Header } from './components'
import  BottomNavBar  from './components/BottomNavBar/BottomNavBar'
import './styles/index.scss';


function App() {
  return (
    <div className="App">

     
      <Header logo={logo} showBackButton showExitButton />

      <BottomNavBar showAddVagaButton showHomeButton showSearchButton showNotificacionButton/>

    </div>
  );
}

export default App;
