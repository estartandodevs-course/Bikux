import React from 'react'
import BottomTabNavigator from './components/BottomTabNavigator/BottomTabNavigator';
import logo from './assets/images/logo.svg';
import { Header } from './components'
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <BottomTabNavigator />
      <Header logo={logo} showBackButton showExitButton />
    </div>
  );
}

export default App;