import React, { useState, useEffect } from "react";

function FocusMode() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;
    const id = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning, secondsLeft]);

  useEffect(() => {
    if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
      alert("Focus session complete! 🎉");
    }
  }, [secondsLeft, isRunning]);

  const startFocus = (minutes) => {
    setSecondsLeft(minutes * 60);
    setIsRunning(true);
  };

  const stopFocus = () => {
    setIsRunning(false);
    setSecondsLeft(0);
  };

  const m = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const s = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="card" style={{ marginTop: 16 }}>
      <h2 className="card-title">Focus Mode</h2>
      <p className="card-subtitle">
        Start a short focus session and commit to one task with no distractions.
      </p>
      <div className="focus-row">
        <div className="focus-timer">
          <span className="focus-time">
            {m}:{s}
          </span>
          <span className="text-muted">
            {isRunning ? "Session in progress..." : "Choose a duration to begin."}
          </span>
        </div>
        <div className="focus-controls">
          <button className="btn btn-outline" onClick={() => startFocus(10)}>
            10 min
          </button>
          <button className="btn btn-outline" onClick={() => startFocus(25)}>
            25 min
          </button>
          <button className="btn btn-outline" onClick={() => startFocus(45)}>
            45 min
          </button>
          {isRunning && (
            <button className="btn btn-text" onClick={stopFocus}>
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FocusMode;