import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  // let checked = false;
  const [isChecked, setIsChecked] = useState(false);
  function handleClick() {
    setIsChecked(!isChecked);
  }
  return (
    <div className="App" id="main">
      <p id="para" className={isChecked ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
      <button id="click" onClick={handleClick}>Click</button>
    </div>
  );
}

export default App
