import React, { useState, useEffect } from "react";

const SignIn = ({ setIsAuthenticated, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email && password;

  useEffect(() => {
    console.log("SignIn re-rendered");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setUser({ email });
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={!isFormValid}>
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
