import { takeEvery, put, call } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import { getUserPosts, getCountUserPosts } from '../../api';
import { setUserPosts } from '../actions/actionCreator';


export function* fetchUserPostsWorker(action) {
    yield put(setUserPosts({ loading: true }));
    const response = yield call(getCountUserPosts, action.queries.id);
    const data = yield call(getUserPosts, action.queries);
    yield put(setUserPosts({data, loading: false, countUserPosts: response.length}));
}

export function* userPostsWatcher() {
    yield takeEvery(ACTIONS.GET_USER_POSTS, fetchUserPostsWorker);
} 