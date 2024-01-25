import logo from './logo.svg';
import './App.css';

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
                <h2>welcome to this very simple react application</h2>
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
            </header>
        </div>
    );
}

export default App;
