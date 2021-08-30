import {
  TASK_ADD,
  TASK_EDIT,
  TASK_TOGGLE,
  TASK_DELETE,
} from "../actions/types";

interface TaskType {
  id: number;
  content: string;
  isCheck: boolean;
  createdAt: string;
}

interface TasksType {
  data: TaskType;
  loading: boolean;
  error: boolean;
}
interface Action {
  type: string;
  tasks: TasksType;
}
const INITIAL_STATE: TasksType[] = []; //[{data:{ id:1, content: '으쌰으쌰', isCheck: false, createdAt: 2021-09-01}, loading, error}]

export default function tasks(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case TASK_ADD:
      return state.concat(action.tasks);
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
