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
export const editTask = () => ({ type: TASK_EDIT });
export const toggleTask = () => ({ type: TASK_TOGGLE });
export const deleteTask = () => ({ type: TASK_DELETE });
