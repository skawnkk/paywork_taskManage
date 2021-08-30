import { FormEvent } from "react";
import styled from "styled-components";
import { useInput } from "./hooks/useInput";
function App() {
  const [value, onChange] = useInput("");
  const handleCreateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
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
    </div>
  );
}

export default App;
const TaskHeader = styled.div`
  background-color: blue;
`;
