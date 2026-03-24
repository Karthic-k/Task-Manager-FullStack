import axios from "axios";

const BASE_URL = "http://localhost:8080/tasks";

export const getTasks = (status, assignedTo) => {
  return axios.get(BASE_URL, {
    params: { status, assignedTo }
  });
};

export const updateTaskStatus = (id, status) => {
  return axios.put(`${BASE_URL}/${id}/status`, null, {
    params: { status }
  });
};