import { takeEvery, put, call } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import { getPosts } from '../../api';
import { setPosts } from '../actions/actionCreator';

export function* handlePosts() { 
    const data = yield call(getPosts);
    yield put(setPosts(data));
}

export function* getAllPostsWorker() {
    yield call(handlePosts);
}

export function* postsWatcher() {
    yield takeEvery(ACTIONS.GET_POSTS, getAllPostsWorker);
} 