import React, { useState } from "react";
import SupportChat from "./SupportChat";

function AccountTabs({ currentUser }) {
  const [tab, setTab] = useState("subscription");
  const [cartPlan, setCartPlan] = useState(null);
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const plans = [
    { id: "free", name: "Free", price: "$0", desc: "Basic task tracking" },
    { id: "plus", name: "Plus", price: "$4.99/mo", desc: "Stats and streaks" },
    { id: "pro", name: "Pro", price: "$8.99/mo", desc: "Advanced analytics & focus tools" }
  ];

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    setNotes((prev) => [...prev, { id: Date.now(), text: noteText.trim() }]);
    setNoteText("");
  };

  return (
    <div className="card">
      <h2 className="card-title">Account & Support</h2>
      <p className="card-subtitle">
        Manage your profile, subscription, notes, and get help – all in one place.
      </p>

      <div className="chip-row" style={{ marginBottom: 12 }}>
        {[
          "subscription",
          "profile",
          "activity",
          "about",
          "faq",
          "support"
        ].map((name) => (
          <button
            key={name}
            className={`chip ${tab === name ? "chip--active" : ""}`}
            onClick={() => setTab(name)}
          >
            {name[0].toUpperCase() + name.slice(1)}
          </button>
        ))}
      </div>

      {tab === "subscription" && (
        <div className="subscription-layout">
          <div className="plans-grid">
            {plans.map((plan) => (
              <div key={plan.id} className="card-compact">
                <h3 className="card-title">{plan.name}</h3>
                <p className="stat-big">{plan.price}</p>
                <p className="text-muted">{plan.desc}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => setCartPlan(plan)}
                >
                  {cartPlan?.id === plan.id ? "Selected" : "Choose plan"}
                </button>
              </div>
            ))}
          </div>
          <div className="card-compact" style={{ marginTop: 16 }}>
            <h3 className="card-title">Your Cart</h3>
            {cartPlan ? (
              <>
                <p className="text-muted">
                  You’re about to subscribe to <strong>{cartPlan.name}</strong> ({cartPlan.price}).
                </p>
                <button className="btn btn-outline">
                  Continue
                </button>
              </>
            ) : (
              <p className="text-muted">No plan selected yet.</p>
            )}
          </div>
        </div>
      )}

      {tab === "profile" && (
        <div>
          <h3 className="card-title">Profile</h3>
          <p className="text-muted">Basic profile info</p>
          <ul>
            <li><strong>Name:</strong> {currentUser?.name || "Demo User"}</li>
            <li><strong>Email:</strong> {currentUser?.email || "demo@manager.app"}</li>
          </ul>
        </div>
      )}

      {tab === "activity" && (
        <div className="grid-2">
          <div>
            <h3 className="card-title">Personal Notes</h3>
            <form className="form" onSubmit={handleAddNote}>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                rows={3}
                placeholder="Write a quick thought or reminder..."
              />
              <button className="btn btn-primary" type="submit">Save note</button>
            </form>
            <ul className="task-list" style={{ marginTop: 12 }}>
              {notes.length === 0 && (
                <p className="text-muted">No notes yet. Start with one idea.</p>
              )}
              {notes.map((n) => (
                <li key={n.id} className="task-item">
                  <p className="task-desc">{n.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="card-title">Invites & Events</h3>
            <p className="text-muted">Demo events (hardcoded):</p>
            <ul>
              <li>🗓 Productivity Workshop – Jan 10</li>
              <li>🧠 Deep Work Session – Jan 15</li>
              <li>💬 Study Group – Jan 20</li>
            </ul>
          </div>
        </div>
      )}

      {tab === "about" && (
        <div>
          <h3 className="card-title">About Manager</h3>
          <p className="text-muted">
            Manager is a student-focused productivity app designed to combine task
            management, motivation, and gentle data-driven insights in one interface.
          </p>
        </div>
      )}

      {tab === "faq" && (
        <div>
          <h3 className="card-title">Frequently Asked Questions</h3>
          <ul>
            <li><strong>Is this saving my data online?</strong> No, this demo stores data in memory only.</li>
            <li><strong>Can I use it across devices?</strong> Yes, website is live via github pages: https://a05-z04.github.io/taskflow/.</li>
            <li><strong>Does payment actually charge my card?</strong> No, all checkout are demo only.</li>
          </ul>
        </div>
      )}

      {tab === "support" && (
        <div>
          <h3 className="card-title">Support</h3>
          <p className="card-subtitle">
            The chat below is a front-end demo only, simulating an AI assistant for Manager.
          </p>
          <SupportChat />
        </div>
      )}
    </div>
  );
}

export default AccountTabs;