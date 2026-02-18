import React, { useState, useEffect } from "react";

const SignUp = ({ setIsAuthenticated, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isFormValid = email && password && password === confirmPassword;

  useEffect(() => {
    console.log("SignUp re-rendered");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setUser({ email });
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Sign Up</h2>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {password && confirmPassword && password !== confirmPassword && (
        <p className="error">Passwords do not match!</p>
      )}
      <button type="submit" disabled={!isFormValid}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
