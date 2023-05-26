import { takeEvery, put, call } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import { getPosts } from '../../api';
import { setPosts } from '../actions/actionCreator';

export function* getAllPostsWorker(action) {
    yield put(setPosts({ loading: true }));
    const data = yield call(getPosts, action.queries);
    yield put(setPosts({data, loading: false}));
}

export function* postsWatcher() {
    yield takeEvery(ACTIONS.GET_POSTS, getAllPostsWorker);
} 