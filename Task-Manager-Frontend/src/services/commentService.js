import axios from "axios";

const BASE_URL = "http://localhost:8080/comments";

export const addComment = (taskId, userId, message) => {
  return axios.post(BASE_URL, { taskId, userId, message });
};

export const getCommentsByTaskId = (taskId) => {
  return axios.get(`${BASE_URL}/${taskId}`);
};
