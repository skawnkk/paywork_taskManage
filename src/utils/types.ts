export interface TasksToProp {
  tasks: TaskStatus;
}

export interface TaskStatus {
  data: TaskType[];
  loading: boolean;
  error: boolean;
}

export interface TaskType {
  id?: number;
  content: string;
  isCheck: boolean;
  createdAt: string;
}
export interface TaskToProp {
  task: TaskType;
}
