import { FormEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTaskList, addTask } from "./store/actions/task/tasks";
import styled from "styled-components";
import { BsFillPlusCircleFill as PlusBtn } from "react-icons/bs";
import TaskList from "components/taskList";
import { useInput } from "./hooks/useInput";
import { TasksToProp } from "utils/types";
import SwitchMode from "components/SwitchMode";

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
        <SideBtn>
          <SwitchMode />
        </SideBtn>

        <h1>My Day</h1>
        <form name="enroll-task" onSubmit={handleCreateTask}>
          <input
            type="text"
            name="enroll-todo"
            placeholder="새로운 태스크를 입력하세요 :)"
            {...{ value, onChange }}
          />
          <button type="submit">
            <PlusBtn />
          </button>
        </form>
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
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.main};
  font-size: 30px;
  padding: 30px;
  h1 {
    font-family: "Anton", sans-serif;
  }
  form {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    width: 50%;
    min-width: 260px;
    margin-top: 30px;
    border: 1px solid ${({ theme }) => theme.main};
  }
  input {
    width: 100%;
  }
  input::placeholder {
    color: ${({ theme }) => theme.main};
  }
  button {
    color: ${({ theme }) => theme.main};
    font-size: 30px;
    padding-top: 9px;
  }
`;
