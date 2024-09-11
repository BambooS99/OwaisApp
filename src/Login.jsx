import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  let random = (Math.random() + 1).toString(36).substring(6);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    sessionStorage.setItem("random", random);
    alert("You are logged in");
  };
  sessionStorage.clear();
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="passwordForm">
        <label htmlFor="password">Password:</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="loginButton" type="submit">
        <Link to="Homepage">Login</Link>
      </button>
    </form>
  );
}

export default LoginForm;
