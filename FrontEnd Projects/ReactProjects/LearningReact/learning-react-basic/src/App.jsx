import './App.css';
import Gallery from './Gallery';
import logo from './logo.svg';
import { Profile } from './Profile';
import TodoList from './TodoList';
import Avatar from './Avatar';
import Clock from './Clock';
import PackingList from './PackingList';
import RenderingList from '../Components/RenderingLists';

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
      <TodoList />
      <Avatar />
      <Clock />
      <PackingList />
      <RenderingList />
    </div>
  );
}

export default App;
