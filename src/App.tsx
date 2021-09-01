import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTaskList } from "store/actions/task/tasks";
import TaskInputForm from "components/taskHeader/TaskInputForm";
import TaskList from "components/taskList";
import SwitchMode from "components/taskHeader/SwitchMode";
import { TasksToProp } from "utils/types";
import styled from "styled-components";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: TasksToProp) => state);

  useEffect(() => {
    dispatch(getTaskList());
  }, [dispatch]);

  return (
    <div className="App">
      <TaskHeader>
        <SideBtn>
          <SwitchMode />
        </SideBtn>
        <h1>My Day</h1>
        <TaskInputForm />
      </TaskHeader>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

const SideBtn = styled.div`
  position: absolute;
  right: 100px;
`;
const TaskHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 560px;
  background-color: ${({ theme }) => theme.headerBack};
  color: ${({ theme }) => theme.headerElement};
  font-size: 30px;
  padding: 30px;
  h1 {
    font-family: "Anton", sans-serif;
  }
`;
