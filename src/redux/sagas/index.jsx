// sagas/index.js
import { all } from 'redux-saga/effects';
import testSaga from './testSaga';
import homePageSaga from './homeSaga';


function* rootSaga() {
    yield all([
        testSaga(),
        homePageSaga()
    ]);
}

export default rootSaga;
