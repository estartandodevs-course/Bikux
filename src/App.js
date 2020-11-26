import logo from './assets/images/logo.svg';
import { Header } from './components'
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header logo={logo} showBackButton showExitButton />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
