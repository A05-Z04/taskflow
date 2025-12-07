import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [tag, setTag] = useState("General");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      title: title.trim(),
      description: description.trim(),
      priority,
      tag,
      dueDate: dueDate || "No date",
      completed: false
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setTag("General");
    setDueDate("");
  };

  return (
    <div className="card">
      <h2 className="card-title">Add New Task</h2>
      <p className="card-subtitle">
        Break down your day into clear, focused tasks. Small wins stack into big progress.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-field">
          <span>Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Example: Study for CPSC 349"
          />
        </label>
        <label className="form-field">
          <span>Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder="Add more context so you know what to do later."
          />
        </label>
        <div className="form-row">
          <label className="form-field">
            <span>Priority</span>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </label>
          <label className="form-field">
            <span>Tag</span>
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="School, Work, Personal..."
            />
          </label>
        </div>
        <label className="form-field">
          <span>Due Date</span>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Add task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;