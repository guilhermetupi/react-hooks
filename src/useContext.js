import React, { createContext, useContext } from "react";

import "./App.css";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value={{ mode: "dark" }}>
      <Button />
    </ThemeContext.Provider>
  );
}

function Button() {
  const theme = useContext(ThemeContext);

  return <button>{theme.mode}</button>;
}

export default App;
