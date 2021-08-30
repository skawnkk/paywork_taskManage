import { delay, put, takeLatest } from "redux-saga/effects";
import {
  TASK_ADD,
  TASK_EDIT,
  TASK_TOGGLE,
  TASK_DELETE,
} from "../actions/types";

export function* addTasks() {
  yield delay(3000);

  yield put({
    type: TASK_ADD,
  });
}

export function* tasks() {
  yield takeLatest(TASK_ADD, addTasks);
}
