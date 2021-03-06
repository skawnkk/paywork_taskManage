import { useDispatch } from "react-redux";
import { toggleTask } from "store/actions/task/tasks";
import { TaskToProp, TaskType } from "utils/types";
import { BiCircle, BiCheckCircle } from "react-icons/bi";

//*태스크 진행/완료 토글 수정
export default function TaskToggle({ task }: TaskToProp) {
  const dispatch = useDispatch();
  const handleTaskToggle = (task: TaskType) => dispatch(toggleTask(task));

  return (
    <div>
      {task.isCheck ? (
        <BiCheckCircle onClick={() => handleTaskToggle(task)} />
      ) : (
        <BiCircle onClick={() => handleTaskToggle(task)} />
      )}
    </div>
  );
}
