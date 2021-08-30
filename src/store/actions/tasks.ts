import { TASK_ADD, TASK_EDIT, TASK_TOGGLE, TASK_DELETE } from "./types";
//*액션함수생성
export const addTask = () => ({ type: TASK_ADD });
export const editTask = () => ({ type: TASK_EDIT });
export const toggleTask = () => ({ type: TASK_TOGGLE });
export const deleteTask = () => ({ type: TASK_DELETE });
