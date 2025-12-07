import React, { useState } from "react";

const BUDDIES = [
  {
    id: 0,
    emoji: "🐣",
    label: "Getting started",
    subtitle: "First tasks of the day."
  },
  {
    id: 1,
    emoji: "🐥",
    label: "In the flow",
    subtitle: "You’re making steady progress."
  },
  {
    id: 2,
    emoji: "🦅",
    label: "Laser focused",
    subtitle: "You’re on a productivity streak."
  },
  {
    id: 3,
    emoji: "🐉",
    label: "Manager legend",
    subtitle: "Everything today is under control."
  }
];

function ProductivityBuddy() {
  const [index, setIndex] = useState(0);

  const buddy = BUDDIES[index];

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % BUDDIES.length);
  };

  return (
    <button
      type="button"
      className="buddy-pill buddy-pill-button"
      onClick={handleClick}
      title="Click to change your productivity buddy"
    >
      <span className="buddy-emoji">{buddy.emoji}</span>
      <span className="buddy-text">
        {buddy.label}
        <span className="buddy-subtext">{buddy.subtitle}</span>
      </span>
    </button>
  );
}

export default ProductivityBuddy;