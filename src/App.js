import React, { useState } from "react"
import Dsp from './dsp'
import './App.css';

function App() {
  let [count, setcount] = useState(0)
  let [darkmode, setDarkmode] = useState(false)
  return (
    <div className="App">
      <header className={`App-header ${darkmode ? "light": ""}`}>
          <Dsp counter={count}/>
          <div className="container">
            <button className="btn" onClick={() => setcount(++count)}>Count</button>
            <button className="btn" onClick={() => setcount(0)}>Reset Counter</button>
            <button className="btn" onClick={() => setDarkmode(!darkmode)}>{darkmode ? "Dark": "Light"} Mode</button>
      </div>
      </header>
    </div>
  );
}

export default App;
