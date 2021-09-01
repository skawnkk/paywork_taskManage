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

export interface SelectorType {
  screenTheme: boolean;
  tasks: TaskStatus;
}

export interface Theme {
  background: string;
  headerBack: string;
  headerElement: string;
  baseFont: string;
  tabFontTrue: string;
  tabFontFalse: string;
  line: string;
  tabBackTrue: string;
  tabBackFalse: string;
}
