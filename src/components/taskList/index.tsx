import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../store/actions/tasks";
import TaskText from "./TaskText";
import { TaskType, TasksToProp } from "../../utils/types";
import { changeDateFormat } from "../../utils/date";
import { BiCircle, BiCheckCircle } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import styled from "styled-components";

interface Tasks {
  tasks: TasksToProp;
}
export default function TaskList({ tasks }: Tasks) {
  const dispatch = useDispatch();
  const { data: tasklist, loading, error } = tasks.tasks;

  const handleTaskToggle = (task: TaskType) => dispatch(toggleTask(task));
  const handleTaskDelete = (task: TaskType) => dispatch(deleteTask(task));

  if (loading) return <ListBox>Loading...</ListBox>;
  if (error) return <ListBox>에러가 발생했어요. 다시 접속해 주세요😦</ListBox>;
  if (!tasklist.length) return <ListBox>새로운 계획을 세워보세요📌</ListBox>;

  return (
    <ListBox>
      {tasklist?.map((task: TaskType) => {
        return (
          <TaskBox key={task.id} isCheck={task.isCheck}>
            {task.isCheck ? (
              <BiCheckCircle onClick={() => handleTaskToggle(task)} />
            ) : (
              <BiCircle onClick={() => handleTaskToggle(task)} />
            )}
            <TaskText task={task} />
            <p>{changeDateFormat(task.createdAt)}</p>
            <RiDeleteBin2Fill onClick={() => handleTaskDelete(task)} />
          </TaskBox>
        );
      })}
    </ListBox>
  );
}
interface TaskBoxProp {
  isCheck: boolean;
}
const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  min-width: 520px;
  gap: 10px;
  margin: 20px 10%;
`;
const TaskBox = styled.li<TaskBoxProp>`
  display: grid;
  grid-template-columns: 0.1fr 0.5fr 0.4fr 0.1fr;
  justify-content: space-between;
  gap: 10px 0;
  p {
    text-decoration: ${(props) => (props.isCheck ? "line-through" : "none")};
    color: ${(props) =>
      props.isCheck ? props.theme.color.grey : props.theme.color.baseFont};
  }
`;
