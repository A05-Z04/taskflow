import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function TaskDashboard({ tasks, onAddTask, onUpdateTask, onDeleteTask }) {
  const [filter, setFilter] = useState("all"); // all | completed | pending | high

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    if (filter === "high") return task.priority === "High";
    return true;
  });

  return (
    <div className="grid-2">
      <div>
        <div className="card">
          <div className="card-header-row">
            <h2 className="card-title">Task Dashboard</h2>
            <div className="chip-row">
              <button
                className={`chip ${filter === "all" ? "chip--active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`chip ${filter === "pending" ? "chip--active" : ""}`}
                onClick={() => setFilter("pending")}
              >
                Pending
              </button>
              <button
                className={`chip ${filter === "completed" ? "chip--active" : ""}`}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
              <button
                className={`chip ${filter === "high" ? "chip--active" : ""}`}
                onClick={() => setFilter("high")}
              >
                High Priority
              </button>
            </div>
          </div>

          <TaskList
            tasks={filteredTasks}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        </div>
      </div>

      <div>
        <TaskForm onAddTask={onAddTask} />
      </div>
    </div>
  );
}

export default TaskDashboard;