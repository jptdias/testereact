import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import QualquerCoisa from './components/QualquerCoisa'


function App() {
  const [clicked, setclicked] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button id='botao'>
          a
        </button>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {setclicked(!clicked)
          }} >
          Learn React
        </a>
        <QualquerCoisa texto={clicked ? 'texto do qualquer coisa' : 'clicou'} />
      </header>
    </div>
  );
}

export default App;
