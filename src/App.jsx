import logo from "./logo.svg";
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
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a> */}
      </header>
    </div>
  );
}

export default App;
