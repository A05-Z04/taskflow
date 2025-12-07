import React from "react";

function TaskItem({ task, onUpdateTask, onDeleteTask }) {
  const toggleCompleted = () => {
    onUpdateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className={`task-item ${task.completed ? "task-item--completed" : ""}`}>
      <div className="task-main">
        <label className="task-checkbox">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={toggleCompleted}
          />
          <span className="task-title">{task.title}</span>
        </label>
        <p className="task-desc">{task.description}</p>
        <div className="task-meta">
          <span className={`badge badge-${task.priority.toLowerCase()}`}>
            {task.priority} priority
          </span>
          <span className="badge badge-outline">{task.tag}</span>
          <span className="task-date">Due {task.dueDate}</span>
        </div>
      </div>
      <div className="task-actions">
        <button className="btn-text" onClick={() => onDeleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;