import React from "react";
import { updateTaskStatus } from "../../services/taskService";

function TaskCard({ task, refreshTasks }) {

  const updateStatus = async (status) => {
    try {
      await updateTaskStatus(task.id, status);
      refreshTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Assigned To: {task.assignedTo}</p>

      <button onClick={() => updateStatus("TODO")}>Todo</button>
      <button onClick={() => updateStatus("IN_PROGRESS")}>In Progress</button>
      <button onClick={() => updateStatus("DONE")}>Done</button>
    </div>
  );
}

export default TaskCard;