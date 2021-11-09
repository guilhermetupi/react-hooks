import React, { useReducer } from "react";

import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };
    case "minus":
      return {
        ...state,
        counter: state.counter - 1,
        clicks: state.clicks + 1,
      };
    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  clicks: 0,
};

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialValue
    //(initalValue) => ({ name: initalValue }) // manipular valor inicial
  );

  function handlePlus() {
    dispatch({ type: "plus" });
  }

  function handleMinus() {
    dispatch({ type: "minus" });
  }

  return (
    <>
      <span>
        <div>
          <button onClick={handlePlus}>+</button>
          <h1>{state.counter}</h1>
          <button onClick={handleMinus}>-</button>
        </div>
        <h3>Cliques: {state.clicks}</h3>
      </span>
    </>
  );
}

export default App;
