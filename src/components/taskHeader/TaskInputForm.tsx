import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useInput } from "hooks/useInput";
import { addTask } from "store/actions/task/tasks";
import { BsFillPlusCircleFill as PlusBtn } from "react-icons/bs";
import styled from "styled-components";
export default function TaskInputForm() {
  const dispatch = useDispatch();
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
    <FormBox>
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
    </FormBox>
  );
}
const FormBox = styled.div`
  width: 60%;
  form {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    min-width: 260px;
    margin-top: 30px;
    border: 1px solid ${({ theme }) => theme.headerElement};
  }
  input {
    width: 100%;
    color: ${({ theme }) => theme.headerElement};
  }
  input::placeholder {
    color: ${({ theme }) => theme.headerElement};
  }
  button {
    color: ${({ theme }) => theme.headerElement};
    font-size: 30px;
    padding-top: 9px;
  }
`;
