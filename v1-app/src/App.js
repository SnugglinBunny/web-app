import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Deploy } from './Components/Deploy/Deploy';

function App() {
  const [state, setState] = useState({})

  useEffect(() => {
    fetch('/api/time').then(response => {
      if (response.status == 200) {
        return response.json()
      }
    }).then(data => setState(data)).then(error => console.log(error))
  }, [])

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
          <Deploy prop={state} />
        </a>
      </header>
    </div>
  );
}

export default App;
