import React from "react";
import ProductivityBuddy from "./ProductivityBuddy";

function Layout({
  children,
  activeView,
  onChangeView,
  isAuthenticated,
  currentUser,
  theme,
  onToggleTheme
}) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-logo">
          <span className="logo-dot" />
          <span>Manager</span>
        </div>

        <nav className="app-nav">
          <button
            className={`nav-tab ${activeView === "tasks" ? "nav-tab--active" : ""}`}
            onClick={() => onChangeView("tasks")}
          >
            Tasks
          </button>
          <button
            className={`nav-tab ${activeView === "progress" ? "nav-tab--active" : ""}`}
            onClick={() => onChangeView("progress")}
          >
            Progress
          </button>
          <button
            className={`nav-tab ${activeView === "analytics" ? "nav-tab--active" : ""}`}
            onClick={() => onChangeView("analytics")}
          >
            Analytics
          </button>
          <button
            className={`nav-tab ${activeView === "account" ? "nav-tab--active" : ""}`}
            onClick={() => onChangeView("account")}
          >
            Account
          </button>
        </nav>

        <div className="app-right">
          <button className="theme-toggle" onClick={onToggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <ProductivityBuddy />

          <div className="app-user">
            {isAuthenticated ? (
              <span className="user-pill">
                <span className="user-avatar">{currentUser?.name?.[0] || "U"}</span>
                <span>{currentUser?.name || "Demo User"}</span>
              </span>
            ) : (
              <span className="user-guest">Demo Mode</span>
            )}
          </div>
        </div>
      </header>

      <main className="app-main">{children}</main>
    </div>
  );
}

export default Layout;