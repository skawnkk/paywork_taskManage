import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "store/actions/task/tasks";
import { changeDateFormat } from "utils/date";
import { TaskType, TasksToProp } from "utils/types";
import { RiDeleteBin2Fill as TaskDeleteBtn } from "react-icons/ri";
import styled from "styled-components";
import TaskText from "./TaskText";
import TaskToggle from "./TaskToggle";
import TaskTabs from "./TaskTabs";
interface Tasks {
  tasks: TasksToProp;
}
export default function TaskList({ tasks }: Tasks) {
  const dispatch = useDispatch();
  const { data: tasklist, loading, error } = tasks.tasks;
  const [listView, setListView] = useState(tasklist);
  const handleTaskDelete = (task: TaskType) => dispatch(deleteTask(task));

  useEffect(() => setListView(tasklist), [tasks]);

  if (loading) return <ListBox>Loading...</ListBox>;
  if (error) return <ListBox>에러가 발생했어요. 다시 접속해 주세요😦</ListBox>;
  if (!tasklist.length) return <ListBox>새로운 계획을 세워보세요📌</ListBox>;
  return (
    <TaskListBox>
      <TaskTabs {...{ tasklist, setListView }} />

      <ListBox>
        {listView?.map((task: TaskType) => {
          return (
            <TaskBox key={task.id} isCheck={task.isCheck}>
              <TaskToggle task={task} />
              <TaskText task={task} />
              <p>{changeDateFormat(task.createdAt)}</p>
              <TaskDeleteBtn onClick={() => handleTaskDelete(task)} />
            </TaskBox>
          );
        })}
      </ListBox>
      <GuideMsg>✌ Double-click Tasks to edit content</GuideMsg>
    </TaskListBox>
  );
}
interface TaskBoxProp {
  isCheck: boolean;
}
const GuideMsg = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;
const TaskListBox = styled.div`
  margin: 20px auto;
  width: 80%;
  color: ${({ theme }) => theme.baseFont};
`;
const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  margin: 0px auto;
  min-width: 520px;
  border: 1px solid ${({ theme }) => theme.line};
  text-align: center;
  color: ${({ theme }) => theme.baseFont};
`;
const TaskBox = styled.li<TaskBoxProp>`
  display: grid;
  grid-template-columns: 0.1fr 0.5fr 0.4fr 0.1fr;
  justify-content: space-between;
  gap: 10px 0;
  p {
    text-decoration: ${(props) => (props.isCheck ? "line-through" : "none")};
    color: ${(props) =>
      props.isCheck ? props.theme.line : props.theme.baseFont};
  }
`;
