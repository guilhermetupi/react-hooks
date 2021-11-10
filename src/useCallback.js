import React, { useState, useCallback } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const handlePlus = useCallback(
    () => setCounter((prevState) => prevState + 1),
    []
  ); // Previne criação de nova função a cada renderização

  const handleMinus = useCallback(
    () => setCounter((prevState) => prevState - 1),
    []
  ); // Previne criação de nova função a cada renderização

  return (
    <div>
      <h1>{counter}</h1>
      <span>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </span>
    </div>
  );
}

export default App;
