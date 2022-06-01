import Axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  // const getJoke = () => {
  //   Axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
  //     setJoke(response.data.value);
  //   });
  // };

  function getJoke() {
    // fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      });
  }

  return (
    <div className="App">
      <h1>{joke}</h1>
      <button onClick={getJoke}>Get Joke</button>
    </div>
  );
}

export default App;
