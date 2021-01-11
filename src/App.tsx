import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyReact from './playground/react-hooks-ex/custom-hook';
import MyComponent from './playground/react-hooks-ex/myComponent';

const MyApp = MyReact.render(MyComponent);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
