import {
  TASK_LIST,
  TASK_ADD,
  TASK_EDIT,
  TASK_TOGGLE,
  TASK_DELETE,
} from "./types";
import { TaskType } from "../../utils/types";
//*액션함수생성

//액션타입
interface Action {
  type: string;
  payload: TaskType;
  meta: TaskType;
}
export const getTaskList = () => ({ type: TASK_LIST });
export const addTask = (new_task: TaskType): Action => ({
  type: TASK_ADD,
  payload: new_task,
  meta: new_task,
});
export const editTask = (task: TaskType) => ({
  type: TASK_EDIT,
  payload: task,
});
export const toggleTask = (task: TaskType) => ({
  type: TASK_TOGGLE,
  payload: task,
});
export const deleteTask = (id: number | undefined) => ({
  type: TASK_DELETE,
  payload: id,
});
