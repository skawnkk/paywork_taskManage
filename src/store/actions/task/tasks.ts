import {
  TASK_LIST,
  TASK_ADD,
  TASK_EDIT,
  TASK_TOGGLE,
  TASK_DELETE,
} from "./types";
import { TaskType } from "utils/types";

//*태스크 관련 액션생성함수
export const getTaskList = () => ({ type: TASK_LIST });
export const addTask = (new_task: TaskType) => ({
  type: TASK_ADD,
  payload: new_task,
});
export const editTask = (task: TaskType) => ({
  type: TASK_EDIT,
  payload: task,
});
export const toggleTask = (task: TaskType) => ({
  type: TASK_TOGGLE,
  payload: task,
});
export const deleteTask = (task: TaskType) => ({
  type: TASK_DELETE,
  payload: task,
});
