import {
  TASK_LIST,
  TASK_LIST_SUCCESS,
  TASK_LIST_ERROR,
  TASK_LIST_ADD,
  TASK_LIST_EDIT,
  TASK_LIST_TOGGLE,
  TASK_LIST_DELETE,
} from "../actions/task/types";
import { TaskType, TaskStatus } from "utils/types";

//*태스크 관리 리듀서
interface Payload {
  data: TaskType;
}
interface Action {
  type: string;
  payload: Payload;
  meta: number;
}
const INITIAL_STATE: TaskStatus = { data: [], loading: true, error: false };

export default function tasks(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case TASK_LIST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case TASK_LIST_SUCCESS:
      return {
        data: action.payload?.data,
        loading: false,
        error: false,
      };
    case TASK_LIST_ADD:
      return {
        ...state,
        data: state.data?.concat(action.payload.data),
        error: false,
      };
    case TASK_LIST_TOGGLE:
      return {
        ...state,
        data: state.data?.map((task) =>
          task.id !== action.payload.data.id
            ? task
            : { ...task, isCheck: !task.isCheck }
        ),
      };
    case TASK_LIST_EDIT:
      return {
        ...state,
        data: state.data?.map((task) =>
          task.id !== action.payload.data.id
            ? task
            : { ...task, content: action.payload.data.content }
        ),
      };
    case TASK_LIST_ERROR:
      return {
        data: action.payload.data,
        loading: false,
        error: true,
      };
    case TASK_LIST_DELETE:
      return {
        ...state,
        data: state.data?.filter((task) => task.id !== action.meta),
      };
    default:
      return state;
  }
}
