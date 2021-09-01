import axios from "axios";
import { TaskType } from "./types";
export const BASIC_URL = (id?: number | null) =>
  !id
    ? `http://localhost:4000/tasklist`
    : `http://localhost:4000/tasklist/${id}`;

export const getLists = async (task: TaskType) => {
  return await axios.get(BASIC_URL());
};
export const addTask = (task: TaskType) => {
  return axios.post(BASIC_URL(), task);
};
export const toggleTask = (task: TaskType) => {
  const toggleTask = {
    ...task,
    isCheck: !task.isCheck,
  };
  return axios.put(BASIC_URL(task.id), toggleTask);
};
export const editTask = (task: TaskType) => {
  const editTask = {
    ...task,
    content: task.content,
  };
  return axios.put(BASIC_URL(task.id), editTask);
};
export const deleteTask = (task: TaskType) => {
  return axios.delete(BASIC_URL(task.id));
};
