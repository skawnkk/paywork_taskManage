import {
  TASK_LIST,
  TASK_LIST_SUCCESS,
  TASK_LIST_ERROR,
  TASK_LIST_ADD,
  TASK_LIST_EDIT,
  TASK_LIST_TOGGLE,
  TASK_LIST_DELETE,
} from "../actions/types";
import { TaskType } from "../../utils/types";

interface TasksType {
  data: TaskType[];
  loading: boolean;
  error: boolean;
}
interface Action {
  type: string;
  payload: any;
  new_item: TaskType;
}
const INITIAL_STATE: TasksType = { data: [], loading: true, error: false };
//[{data:{ id:1, content: '으쌰으쌰', isCheck: false, createdAt: 2021-09-01}, loading, error}]

export default function tasks(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case TASK_LIST: //!초기화 (로딩상태 변경) ___필요한가?
      return {
        ...state,
        loading: true,
        error: false,
      };
    case TASK_LIST_SUCCESS: //전체목록받아오기(첫로딩)
      return {
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case TASK_LIST_ADD:
      return {
        data: state.data?.concat(action.payload.data),
        loading: false,
        error: false,
      };
    case TASK_LIST_TOGGLE:
      return {
        ...state,
        data: state.data?.map((task) => {
          return task.id === action.payload.data.id
            ? { ...task, isCheck: !task.isCheck }
            : task;
        }),
        loading: false,
        error: false,
      };
    case TASK_LIST_EDIT:
      return {
        ...state,
        data: state.data?.map((task) => {
          return task.id === action.payload.data.id
            ? { ...task, content: action.payload.data.content }
            : task;
        }),
        loading: false,
        error: false,
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
        data: state.data?.filter((task) => task.id !== action.payload),
        loading: false,
        error: false,
      };
    default:
      return state;
  }
}
