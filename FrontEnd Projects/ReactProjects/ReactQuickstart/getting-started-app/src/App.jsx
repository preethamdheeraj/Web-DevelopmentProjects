import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function MyButton() {
  return <button>This is a simple button</button>;
}

function Profile() {
  return (
    <>
      <h1>About</h1>
      <p>
        hello there. <br /> how are we doing and this is a simple react
        application
      </p>
    </>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen',
      }}>
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

/* responding to events  */

function MyButtonTwo() {
  function handleClick() {
    alert(
      'this will open the alert box in the console and will show this message'
    );
  }

  return (
    <>
      <p>click on the below button to see the alert box functionality work</p>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

/* updating the screen */
function MyButtonThree() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

/* using hooks now we will be designing counters that update together */

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
          Edit <code>src/App.js</code> and save to reload. adding this
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <h2>Welcome to this very simple react application</h2>
        <MyButton />
        <h3>{user.name}</h3>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
        <ShoppingList />
        <MyButtonTwo />
        <p>
          click on the below button to see a count of how many number of times
          you have clicked onthe button
        </p>
        <MyButtonThree />
      </header>
    </div>
  );
}

export default App;
