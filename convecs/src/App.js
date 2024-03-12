import logo from './logo.svg';
import './App.css';
import SimplePage from './SimplePage';
import React, { useState } from 'react';


function App() {
  return (
    <div className="App">
      <SimplePage />
    </div>
  );

function SliderComponent() {
  // State for the first slider
  const [value1, setValue1] = useState(50);
  // State for the second slider
  const [value2, setValue2] = useState(50);

  return (
    <div>
      {/* Slider 1 */}
      <input
        type="range"
        min="1"
        max="100"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <p>Value of slider 1: {value1}</p>

      {/* Slider 2 */}
      <input
        type="range"
        min="1"
        max="100"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <p>Value of slider 2: {value2}</p>
    </div>
  );
}

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
