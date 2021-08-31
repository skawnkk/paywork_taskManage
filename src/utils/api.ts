import axios from "axios";
import { TaskType } from "./types";
export const BASIC_URL = (id?: number | null) =>
  !id
    ? `http://localhost:4000/tasklist`
    : `http://localhost:4000/tasklist/${id}`;

//리스트 받아오기 : GET BASIC_URL
//task 생성하기 : POST BASIC_URL
//특정 task 받아오기 : GET BASIC_URL(id)
//특정 task 수정하기 : PUT BASIC_URL(id)
//특정 task 삭제하기 : DELETE BASIC_URL(id)

export const getLists = async () => {
  const result = await axios.get(BASIC_URL());
  return result;
};
export const addTask = (new_task: TaskType) => {
  return axios.post(BASIC_URL(), new_task);
};
