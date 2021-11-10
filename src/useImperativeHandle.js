import React, { useRef, forwardRef, useImperativeHandle } from "react";

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
    inputRef.current.submit();
  }

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleSetNumber}>Set value</button>
      <button onClick={handlePrintValue}>Print value</button>
    </div>
  );
}

const Input = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  function handleSubmit() {
    alert(inputRef.current.value);
  }

  useImperativeHandle(ref, () => ({ submit: handleSubmit }), []);

  return <input ref={inputRef} />;
});

export default App;
