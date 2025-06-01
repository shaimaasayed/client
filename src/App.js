import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const handleShowMessageClick = () => {
    setShowMessage(true);
    setMessage("Hello from Express backend!");
  };

  return (
    <div className="App">
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
        <button onClick={handleShowMessageClick}>Show Message</button>
        {showMessage && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
