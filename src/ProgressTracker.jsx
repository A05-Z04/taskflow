import React from "react";

function ProgressTracker({ completionRate, completed, total }) {
  const size = 160;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (completionRate / 100) * circumference;

  return (
    <div className="card">
      <h2 className="card-title">Progress Tracker</h2>
      <p className="card-subtitle">
        See how much you’ve completed today. Aim for steady progress, not perfection.
      </p>

      <div className="progress-layout">
        <svg className="progress-ring" width={size} height={size}>
          <circle
            className="progress-ring__bg"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="progress-ring__value"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            className="progress-ring__text"
          >
            {completionRate}%
          </text>
        </svg>

        <div className="progress-stats">
          <div className="stat-line">
            <span className="stat-label">Tasks completed</span>
            <span className="stat-value">
              {completed} / {total}
            </span>
          </div>
          <div className="stat-line">
            <span className="stat-label">Daily goal</span>
            <span className="stat-value">8 tasks</span>
          </div>
          <div className="stat-line">
            <span className="stat-label">Status</span>
            <span className="stat-chip">
              {completionRate >= 75
                ? "On fire 🔥"
                : completionRate >= 40
                ? "On track ✅"
                : "Getting started ✨"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressTracker;