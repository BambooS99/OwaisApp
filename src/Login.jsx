import React, { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("A name was submitted:  + ${name}");
    alert("A password was submitted:  + ${password}");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <label htmlFor="password">Password:</label>

        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
