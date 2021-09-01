import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { editTask } from "../../store/actions/tasks";
import { useInput } from "hooks/useInput";
import { TaskType } from "utils/types";
export interface TaskToProp {
  task: TaskType;
}
export default function TaskText({ task }: TaskToProp) {
  const dispatch = useDispatch();
  const [editText, onChange] = useInput(task.content);
  const [editMode, setEditMode] = useState(false);
  const handleEditMode = () => setEditMode((mode) => !mode);
  const handleTextEditClick = () => {
    const editedTask = { ...task, content: editText };
    dispatch(editTask(editedTask));
    handleEditMode(); //!handleEditMode를 동기적으로 실행하는 방법? 설마 이것도 리듀서...?
  };

  // useEffect(() => {
  //   if (editMode) handleEditMode();
  // }, [dispatch]);

  return (
    <>
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
    </>
  );
}
