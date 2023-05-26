import { takeEvery, put, call } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import { getCountPosts } from '../../api';
import { setPostsCount } from '../actions/actionCreator';

export function* getCountPostsWorker(action) {
    const posts = yield call(getCountPosts, action.queries.searchValue);
    yield put(setPostsCount({postsCount: posts.length}));
}

export function* postsCountWatcher() {
    yield takeEvery(ACTIONS.GET_COUNT_POSTS, getCountPostsWorker);
} 