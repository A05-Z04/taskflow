import React, { useState } from "react";

function getBotReply(text) {
  const lowered = text.toLowerCase();
  if (lowered.includes("focus") || lowered.includes("study")) {
    return "Try using Focus Mode: set a 25-minute timer and work on just one task.";
  }
  if (lowered.includes("streak")) {
    return "Your streak increases whenever you complete at least one task per day.";
  }
  if (lowered.includes("payment") || lowered.includes("card")) {
    return "In this demo, payments are not real. A future version could use Stripe for secure checkout.";
  }
  return "Thanks for your message! In this demo, I’m a mock assistant using pre-scripted replies.";
}

function SupportChat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi! I’m the Manager assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmed
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getBotReply(trimmed)
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="chat-card">
      <div className="chat-messages">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`chat-bubble chat-bubble--${m.sender}`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <form className="chat-input-row" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type a message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default SupportChat;