function TaskCard({ task }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Assigned To: {task.assignedTo}</p>
    </div>
  );
}

export default TaskCard;