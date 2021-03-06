import "regenerator-runtime/runtime";
import React, { useDebugValue, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [loading, response] = useFetch(
    "https://api.github.com/users/guilhermetupi"
  );
  const [loading1, response1] = useFetch(
    "https://api.github.com/users/joaobatatinha"
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
        setResponse({ json, status: resp.status });
      }, 2000);
    })();
  }, [url]);

  useDebugValue(response?.status, (message) => `Status: ${message}`);

  return [loading, response];
}

export default App;
