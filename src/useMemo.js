import React, { useState, useMemo } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const total = useMemo(() => counter * 564564564 * 45645, [counter]);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <span>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </span>
      <br />
      {total}
      <br />
      {counter < 5 && <span>{name}</span>}
      <br />
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default App;
