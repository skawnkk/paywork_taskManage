import { delay, put, call, takeLatest, CallEffect } from "redux-saga/effects";
import * as TASK_API from "../../utils/api";
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
} from "../actions/types";
import { TaskType } from "../../utils/types";

export function* getTaskList() {
  const wait: CallEffect<true> = yield delay(500);
  try {
    const result: CallEffect<true> = yield call(TASK_API.getLists);
    yield put({ type: TASK_LIST_SUCCESS, payload: result });
  } catch (e) {
    yield put({ type: TASK_LIST_ERROR, payload: e });
  }
}
export function* addTask(action: any) {
  try {
    const result: CallEffect<true> = yield call(
      TASK_API.addTask,
      action.payload
    );
    yield put({ type: TASK_LIST_ADD, payload: result });
  } catch (e) {
    yield put({ type: TASK_LIST_ERROR, payload: e });
  }
}
export function* toggleTask(action: any) {
  try {
    const result: CallEffect<true> = yield call(
      TASK_API.toggleTask,
      action.payload
    );
    yield put({ type: TASK_LIST_TOGGLE, payload: result });
  } catch (e) {
    yield put({ type: TASK_LIST_ERROR, payload: e });
  }
}
export function* editTask(action: any) {
  try {
    const result: CallEffect<true> = yield call(
      TASK_API.editTask,
      action.payload
    );
    yield put({ type: TASK_LIST_EDIT, payload: result });
  } catch (e) {
    yield put({ type: TASK_LIST_ERROR, payload: e });
  }
}
export function* deleteTask(action: any) {
  try {
    const result: CallEffect<true> = yield call(
      TASK_API.deleteTask,
      action.payload
    );
    yield put({ type: TASK_LIST_DELETE });
  } catch (e) {
    yield put({ type: TASK_LIST_ERROR, payload: e });
  }
}

export function* tasks() {
  yield takeLatest(TASK_LIST, getTaskList);
  yield takeLatest(TASK_ADD, addTask);
  yield takeLatest(TASK_TOGGLE, toggleTask);
  yield takeLatest(TASK_EDIT, editTask);
  yield takeLatest(TASK_DELETE, deleteTask);
}
