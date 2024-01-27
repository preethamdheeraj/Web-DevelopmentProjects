import './App.css';
import Gallery from './Gallery';
import logo from './logo.svg';
import { Profile } from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <Gallery />
        <Profile />
      </header>
    </div>
  );
}

export default App;
