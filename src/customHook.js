import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [loading, response] = useFetch(
    "https://api.github.com/users/guilhermetupi"
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <div>{JSON.stringify(response)}</div>;
}

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (() => {
      setTimeout(async () => {
        const resp = await fetch(url);
        const json = await resp.json();

        setLoading(false);
        setResponse(json);
      }, 2000);
    })();
  }, [url]);

  return [loading, response];
}

export default App;
