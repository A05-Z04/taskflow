import React, { useState } from "react";

function AuthPanel({ onLogin, onLogout, currentUser, compact }) {
  const [name, setName] = useState("Adrian");
  const [email, setEmail] = useState("demo@manager.app");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin?.({ name, email });
  };

  if (compact && currentUser) {
    return (
      <div className="card card-compact">
        <h3 className="card-title">Account</h3>
        <p className="card-subtitle">{currentUser.email}</p>
        <button className="btn btn-outline" onClick={onLogout}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="card-title">Welcome to Manager</h2>
      <p className="card-subtitle">
        This is a front-end demo. Authentication is simulated using local state only.
      </p>

      {!currentUser ? (
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Name</span>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </label>
          <label className="form-field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Continue
          </button>
        </form>
      ) : (
        <div className="auth-summary">
          <p>Signed in as {currentUser.name}</p>
          <button className="btn btn-outline" onClick={onLogout}>
            Sign out
          </button>
        </div>
      )}

      <div className="card-footer">
        <p className="text-muted">
          Login credential stored locally
        </p>
      </div>
    </div>
  );
}

export default AuthPanel;