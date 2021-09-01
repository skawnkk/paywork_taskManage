import { FormEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTaskList, addTask } from "./store/actions/tasks";
import styled from "styled-components";
import TaskList from "components/taskList";
import { useInput } from "./hooks/useInput";
import { TasksToProp } from "utils/types";
function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: TasksToProp) => state);

  useEffect(() => {
    dispatch(getTaskList());
  }, [dispatch]);

  const [value, onChange, setValue] = useInput("");
  const handleCreateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const new_task = {
      content: value,
      isCheck: false,
      createdAt: String(new Date()),
    };
    dispatch(addTask(new_task));
    setValue("");
  };

  return (
    <div className="App">
      <TaskHeader>
        <h1>Task Manager</h1>
        <form name="enroll-task" onSubmit={handleCreateTask}>
          <input type="text" name="enroll-todo" {...{ value, onChange }} />
          <button type="submit">add a task</button>
        </form>
      </TaskHeader>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
const TaskHeader = styled.div`
  background-color: blue;
`;
