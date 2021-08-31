import {
  TASK_LIST,
  TASK_LIST_SUCCESS,
  TASK_LIST_ERROR,
  TASK_ADD,
  TASK_ADD_LIST,
  TASK_EDIT,
  TASK_TOGGLE,
  TASK_DELETE,
} from "../actions/types";
import { TaskType } from "../../utils/types";

interface TasksType {
  data: TaskType[] | null;
  loading: boolean;
  error: boolean;
}
interface Action {
  type: string;
  payload: any;
  new_item: TaskType;
}
const INITIAL_STATE: TasksType = { data: null, loading: true, error: false };
//[{data:{ id:1, content: '으쌰으쌰', isCheck: false, createdAt: 2021-09-01}, loading, error}]

export default function tasks(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case TASK_LIST_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case TASK_LIST_ERROR: //이름변경하기(포괄적인에러)
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: true,
      };
    case TASK_ADD_LIST:
      console.log("reducer:", state, action);
      return {
        ...state,
        data: state.data?.concat(action.payload.data),
        loading: false,
        error: false,
      };
    case TASK_EDIT:
      return;
    case TASK_TOGGLE:
      return;
    case TASK_DELETE:
      return;
    default:
      return state;
  }
}
