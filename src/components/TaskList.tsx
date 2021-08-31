import React from "react";
import styled from "styled-components";
import { TaskType } from "../utils/types";
import { BiCircle, BiCheckCircle } from "react-icons/bi";

const getDateInfo = (date: string) => {
  const dateObject = new Date(date);
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  return [
    dateObject.getFullYear() - 2000,
    dateObject.getMonth() + 1,
    dateObject.getDate(),
    day[dateObject.getDay()],
  ];
};
const changeDateFormat = (dateString: string) => {
  const [year, month, date, day] = getDateInfo(dateString);
  return `${year}년 ${month}월 ${date}일 (${day})`;
};

export default function TaskList({ tasks }: any) {
  const { data: tasklist, loading, error } = tasks.tasks;

  if (loading) return <ListBox>Loading...</ListBox>;
  if (error) return <ListBox>에러가 발생했어요. 다시 접속해 주세요😦</ListBox>;
  if (!tasklist.length) return <ListBox>새로운 계획을 세워보세요📌</ListBox>;
  return (
    <ListBox>
      {tasklist.map((task: TaskType) => (
        <TaskBox key={task.id}>
          {task.isCheck ? <BiCheckCircle /> : <BiCircle />}
          <p>{task.content}</p>
          <p>{changeDateFormat(task.createdAt)}</p>
        </TaskBox>
      ))}
    </ListBox>
  );
}

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  min-width: 520px;
  gap: 10px;
  margin: 20px 10%;
`;
const TaskBox = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px 0;
`;
