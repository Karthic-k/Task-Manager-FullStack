import { useState, useEffect } from "react";
import { getTasks } from "../../services/taskService";
import TaskCard from "./TaskCard";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [assignedFilter, setAssignedFilter] = useState("");

  // Fetch tasks on load or when filters change
  useEffect(() => {
    fetchTasks();
  }, [statusFilter, assignedFilter]);

  const fetchTasks = () => {
    getTasks(statusFilter, assignedFilter)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="TODO">Todo</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>

        <input
          type="text"
          placeholder="Filter by user"
          onChange={(e) => setAssignedFilter(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
