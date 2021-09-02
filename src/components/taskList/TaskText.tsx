import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { editTask } from "store/actions/task/tasks";
import { useInput } from "hooks/useInput";
import { TaskToProp } from "utils/types";
import styled from "styled-components";

//* 태스크 목록 내용 수정
export default function TaskText({ task }: TaskToProp) {
  const dispatch = useDispatch();
  const [editText, onChange] = useInput(task.content);
  const [editMode, setEditMode] = useState(false);
  const handleEditMode = () => setEditMode((mode) => !mode);
  const handleTextEditClick = () => {
    const editedTask = { ...task, content: editText };
    dispatch(editTask(editedTask));
    handleEditMode();
  };

  return (
    <TextBox>
      {!editMode ? (
        <p onDoubleClick={handleEditMode}>{task.content}</p>
      ) : (
        <form name="textEdit" onSubmit={handleTextEditClick}>
          <input
            name="textEdit"
            value={editText}
            onChange={onChange}
            autoFocus
          />
          <button>
            <FaCheck type="submit" />
          </button>
        </form>
      )}
    </TextBox>
  );
}

const TextBox = styled.div`
  input,
  button {
    color: ${({ theme }) => theme.baseFont};
  }
`;
