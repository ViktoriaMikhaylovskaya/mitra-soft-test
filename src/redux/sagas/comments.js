import { takeEvery, put, call } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import { getComments } from '../../api';
import { setComments } from '../actions/actionCreator';

export function* fetchCommentsWorker(action) {
    const data = yield call(getComments, action.id);
    yield put(setComments(data));
}

export function* workerSaga() {
    yield call(fetchCommentsWorker);
}

export function* commentWatcher() {
    yield takeEvery(ACTIONS.GET_COMMENTS, fetchCommentsWorker);
}  