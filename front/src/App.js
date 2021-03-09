import React from "react";

import axios from "axios";
import "./App.css";

function App() {
  const [word, setWord] = React.useState("");

  function change() {
    word === ""
      ? axios.get("http://localhost:7777").then((res) => setWord(res.data))
      : setWord("");
  }

  return (
    <div className="App">
      {word}
      <button onClick={change}>Click me!!</button>
    </div>
  );
}

export default App;
