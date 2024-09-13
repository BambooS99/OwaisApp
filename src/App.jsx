import loginIcon from "./LoginIcon.png";
import "./App.css";
import React from "react";
import LoginForm from "./Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loginIcon} className="App-logo" alt="logo" />
        <p>
          <LoginForm />{" "}
        </p>
        {}
      </header>
    </div>
  );
}

export default App;
