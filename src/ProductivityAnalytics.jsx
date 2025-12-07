import React from "react";

function ProductivityAnalytics({ weeklyStats, streak, completionRate }) {
  const maxTotal = Math.max(...weeklyStats.map((d) => d.total), 1);

  return (
    <div className="card">
      <h2 className="card-title">Productivity Analytics</h2>
      <p className="card-subtitle">
        Track your streaks, most productive days, and average completion rate.
      </p>

      <div className="grid-3">
        <div className="stat-card">
          <h3>Current streak</h3>
          <p className="stat-big">{streak.current} days</p>
          <p className="text-muted">Days in a row with at least one completed task.</p>
        </div>
        <div className="stat-card">
          <h3>Best streak</h3>
          <p className="stat-big">{streak.longest} days</p>
          <p className="text-muted">Your longest run of consistent productivity.</p>
        </div>
        <div className="stat-card">
          <h3>Avg completion</h3>
          <p className="stat-big">{completionRate}%</p>
          <p className="text-muted">Based on your current task list.</p>
        </div>
      </div>

      <div className="weekly-chart">
        {weeklyStats.map((day) => {
          const height = (day.total / maxTotal) * 100;
          const fill = (day.completed / day.total) * 100 || 0;
          return (
            <div className="weekly-bar" key={day.day}>
              <div className="weekly-bar__track">
                <div
                  className="weekly-bar__fill"
                  style={{ height: `${height}%` }}
                />
                <div
                  className="weekly-bar__completed"
                  style={{ height: `${(height * fill) / 100}%` }}
                />
              </div>
              <span className="weekly-bar__label">{day.day}</span>
              <span className="weekly-bar__value">
                {day.completed}/{day.total}
              </span>
            </div>
          );
        })}
      </div>

      <div className="card-footer">
        <p className="text-muted">
          Login every day to improve streak!!!
        </p>
      </div>
    </div>
  );
}

export default ProductivityAnalytics;