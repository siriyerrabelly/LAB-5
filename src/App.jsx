
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AuthStatus from "./AuthStatus";
import "./App.css"; // Import the CSS

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Toggle between Sign-In and Sign-Up
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div className="container">
      <h1>welcome!</h1>

      <AuthStatus isAuthenticated={isAuthenticated} user={user} />

      <div className="tab-buttons">
        <button
          className={showSignIn ? "active" : ""}
          onClick={() => setShowSignIn(true)}
        >
          Sign In
        </button>
        <button
          className={!showSignIn ? "active" : ""}
          onClick={() => setShowSignIn(false)}
        >
          Sign Up
        </button>
      </div>

      <div className="form-container">
        {showSignIn ? (
          <SignIn setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
        ) : (
          <SignUp setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
        )}
      </div>
    </div>
  );
};

export default App;
