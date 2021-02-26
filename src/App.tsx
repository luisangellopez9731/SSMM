import React from "react";
import "./App.css";
import MasterMind from "./components/masterMind/MasterMind";

const codeLength = 4
const rowsLength = 15

function App() {
  return (
    <div className="App">
      <MasterMind codeLength={codeLength} rowsLength={rowsLength}/>
    </div>
  );
}

export default App;
