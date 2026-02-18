import React from "react";

const AuthStatus = ({ isAuthenticated, user }) => (
  <div className="auth-status">
    {isAuthenticated ? (
      <p> Logged in as: {user.email}</p>
    ) : (
      <p></p>
    )}
  </div>
);

export default AuthStatus;

