import React, { useRef } from "react";

import "./App.css";

function App() {
  const number = useRef(0);
  const inputRef = useRef(null);

  function handleSetNumber() {
    const newNumber = Math.round(Math.random() * (10 - 1) + 1);
    number.current = newNumber;
  }

  function handlePrintValue() {
    alert(number.current);
    inputRef.current.style.display = "none";
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleSetNumber}>Set value</button>
      <button onClick={handlePrintValue}>Print value</button>
    </div>
  );
}

export default App;
