import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect sempre");
  }); // useEffect runs every render

  useEffect(() => {
    console.log("useEffect um");
  }, []); // useEffect runs only once

  useEffect(() => {
    console.log("useEffect state");
  }, [name]); // useEffect runs only on state change

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
      <h1>{counter}</h1>
      <span>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </span>
      <br />
      <span>{name}</span>
      <br />
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default App;
