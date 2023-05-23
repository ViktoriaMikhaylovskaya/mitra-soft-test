import { takeEvery, put, call } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import { getComments } from '../../api';
import { setComments } from '../actions/actionCreator';

export function* fetchCommentsWorker(action) {
    yield put(setComments({ loading: true }));
    const data = yield call(getComments, action.id);
    yield put(setComments({data, loading: false}));
}

export function* commentWatcher() {
    yield takeEvery(ACTIONS.GET_COMMENTS, fetchCommentsWorker);
}