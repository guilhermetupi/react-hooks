import React, { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function handlePlus() {
    // setTimeout(() => {
    //   // setCounter(counter + 1); // Add 1 to actual counter
    //   setCounter((prevState) => prevState + 1); // Add 1 to new counter value
    // }, 2000);
    setCounter((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <h1>{counter}</h1>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default App;
