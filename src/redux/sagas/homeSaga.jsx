import {
  FETCH_COMMENTS,
  fetchCommentsError,
  fetchCommentsSuccess,
} from "../actions/homePageActions";
import CommentsData from "../../assets/__mockData__/CommentsData.json";
import { put, takeEvery } from "redux-saga/effects";

function* fetchComments() {
  try {
    const comments = CommentsData;
    yield put(fetchCommentsSuccess(comments));
  } catch (error) {
    yield put(fetchCommentsError(error));
  }
}

function* homePageSaga() {
  yield takeEvery(FETCH_COMMENTS, fetchComments);
}

export default homePageSaga;
