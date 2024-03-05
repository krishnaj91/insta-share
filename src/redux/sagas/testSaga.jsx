// SignupSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  TEST_API,
  testApiFailure,
  testApiSuccess,
} from "../actions/testActions";

function* testUserApi(action) {
  try {
    const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
    if (response.status === 200) {
      yield put(testApiSuccess(response.data));
    }
  } catch (error) {
    yield put(testApiFailure(error));
  }
}

function* testSaga() {
  yield takeEvery(TEST_API, testUserApi);
}

export default testSaga;
