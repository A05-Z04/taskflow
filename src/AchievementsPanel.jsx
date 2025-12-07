import React from "react";

function AchievementsPanel({ achievements }) {
  return (
    <div className="card" style={{ marginTop: 16 }}>
      <h2 className="card-title">Achievements</h2>
      <p className="card-subtitle">
        Earn fun badges as you build habits and complete tasks.
      </p>
      {achievements.length === 0 ? (
        <p className="text-muted">No achievements yet – complete some tasks to unlock badges.</p>
      ) : (
        <ul className="achievement-list">
          {achievements.map((a, index) => (
            <li key={index} className="achievement-item">
              🏅 {a}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AchievementsPanel;