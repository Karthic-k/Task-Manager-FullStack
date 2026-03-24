import axios from "axios";

const BASE_URL = "http://localhost:8080/tasks"; // Spring Boot backend URL

export const getTasks = (status, assignedTo) => {
  return axios.get(BASE_URL, {
    params: { status, assignedTo }
  });
};