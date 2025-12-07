import React, { useState, useMemo } from "react";
import Layout from "./Layout";
import TaskDashboard from "./TaskDashboard";
import ProgressTracker from "./ProgressTracker";
import ProductivityAnalytics from "./ProductivityAnalytics";
import AccountTabs from "./AccountTabs";
import AuthPanel from "./AuthPanel";
import FocusMode from "./FocusMode";
import AchievementsPanel from "./AchievementsPanel";
import { mockTasks as initialTasks } from "./mockTasks";
import { mockWeeklyStats, mockStreak } from "./mockStats";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState(initialTasks);
  const [activeView, setActiveView] = useState("tasks"); 
  const [theme, setTheme] = useState("light"); 

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, { ...newTask, id: Date.now() }]);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const completionRate = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const achievements = useMemo(() => {
    const result = [];
    if (completedCount >= 1) {
      result.push("First Step: Completed your first task.");
    }
    if (completedCount >= 5) {
      result.push("On a Roll: Completed 5+ tasks.");
    }
    if (completionRate === 100 && totalCount > 0) {
      result.push("Daily Mastery: Completed all tasks for the day.");
    }
    if (mockStreak.current >= 3) {
      result.push("Streak Starter: 3+ day productivity streak.");
    }
    return result;
  }, [completedCount, completionRate, totalCount]);

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app-root theme-${theme}`}>
      <Layout
        activeView={activeView}
        onChangeView={setActiveView}
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        theme={theme}
        onToggleTheme={toggleTheme}
      >
        {!isAuthenticated ? (
          <div className="app-grid">
            <div className="app-main-panel">
              <AuthPanel onLogin={handleLogin} />
            </div>
          </div>
        ) : (
          <div className="app-grid">
            <div className="app-main-panel">
              {activeView === "tasks" && (
                <TaskDashboard
                  tasks={tasks}
                  onAddTask={handleAddTask}
                  onUpdateTask={handleUpdateTask}
                  onDeleteTask={handleDeleteTask}
                />
              )}

              {activeView === "progress" && (
                <>
                  <ProgressTracker
                    completionRate={completionRate}
                    completed={completedCount}
                    total={totalCount}
                  />
                  <FocusMode />
                </>
              )}

              {activeView === "analytics" && (
                <>
                  <ProductivityAnalytics
                    weeklyStats={mockWeeklyStats}
                    streak={mockStreak}
                    completionRate={completionRate}
                  />
                  <AchievementsPanel achievements={achievements} />
                </>
              )}

              {activeView === "account" && (
                <AccountTabs currentUser={currentUser} />
              )}
            </div>

            <div className="app-sidebar-panel">
              <AuthPanel
                onLogin={handleLogin}
                onLogout={handleLogout}
                currentUser={currentUser}
                compact
              />
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
}

export default App;