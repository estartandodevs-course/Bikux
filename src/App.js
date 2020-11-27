import React from 'react'
import logo from './assets/images/logo.svg';
import { Header } from './components'
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header logo={logo} showBackButton showExitButton />
    </div>
  );
}

export default App;