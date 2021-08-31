import {
  delay,
  put,
  call,
  takeLatest,
  CallEffect,
  SimpleEffect,
  CallEffectDescriptor,
} from "redux-saga/effects";
import * as TASK_API from "../../utils/api";
import {
  TASK_LIST,
  TASK_LIST_SUCCESS,
  TASK_LIST_ERROR,
  TASK_ADD,
  TASK_ADD_LIST,
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
    yield put({ type: TASK_ADD_LIST, payload: result });
  } catch (e) {
    yield put({ type: TASK_LIST_ERROR, payload: e });
  }
}

export function* tasks() {
  yield takeLatest(TASK_LIST, getTaskList);
  yield takeLatest(TASK_ADD, addTask);
}
