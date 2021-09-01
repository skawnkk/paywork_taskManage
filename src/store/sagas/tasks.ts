import { AxiosResponse } from "axios";
import { delay, put, call, takeLatest, CallEffect } from "redux-saga/effects";
import { TaskType } from "utils/types";
import * as TASK_API from "utils/api";
import {
  TASK_LIST,
  TASK_LIST_SUCCESS,
  TASK_LIST_ERROR,
  TASK_LIST_ADD,
  TASK_LIST_TOGGLE,
  TASK_LIST_EDIT,
  TASK_LIST_DELETE,
  TASK_ADD,
  TASK_EDIT,
  TASK_TOGGLE,
  TASK_DELETE,
} from "../actions/task/types";

const getList = createSaga(TASK_API.getLists, TASK_LIST_SUCCESS);
const addTask = createSaga(TASK_API.addTask, TASK_LIST_ADD);
const toggleTask = createSaga(TASK_API.toggleTask, TASK_LIST_TOGGLE);
const editTask = createSaga(TASK_API.editTask, TASK_LIST_EDIT);
const deleteTask = createSaga(TASK_API.deleteTask, TASK_LIST_DELETE);

interface Action {
  type: string;
  payload: TaskType;
  meta: number;
}

function createSaga(
  api: (task: TaskType) => Promise<AxiosResponse<any>>,
  type: string
) {
  return function* saga(action: Action) {
    try {
      const result: CallEffect<true> = yield call(api, action.payload);
      yield delay(500);
      yield put({ type, payload: result, meta: action.payload?.id });
    } catch (e) {
      yield put({ type: TASK_LIST_ERROR, payload: e });
    }
  };
}

export function* tasks() {
  yield takeLatest(TASK_LIST, getList);
  yield takeLatest(TASK_ADD, addTask);
  yield takeLatest(TASK_TOGGLE, toggleTask);
  yield takeLatest(TASK_EDIT, editTask);
  yield takeLatest(TASK_DELETE, deleteTask);
}
