import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToWords } from 'to-words'
function App() {
  const numToWords = new ToWords({
    localeCode: 'en-US',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
    },
  })

  const toWords = (toWords, value) => {
    let result = toWords.convert(value, { currency: true })
    return result.slice(0, -4)
  }
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
      </header>
      <div>{toWords(numToWords,"12323233")}</div>
    </div>
  );
}

export default App;
