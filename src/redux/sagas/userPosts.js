import { takeEvery, put, call } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import { getUserPosts } from '../../api';
import { setUserPosts } from '../actions/actionCreator';


export function* fetchUserPostsWorker(action) {
    yield put(setUserPosts({loading: true}));
    const data = yield call(getUserPosts, action.id);
    yield put(setUserPosts({data, loading: false}));
}

export function* userPostsWatcher() {
    yield takeEvery(ACTIONS.GET_USER_POSTS, fetchUserPostsWorker);
} 