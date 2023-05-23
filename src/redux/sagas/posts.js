import { takeEvery, put, call } from 'redux-saga/effects';
import { ACTIONS } from '../constants';
import { getPosts } from '../../api';
import { setPosts } from '../actions/actionCreator';

export function* handlePosts() { 
    yield put(setPosts({loading: true}));
    const data = yield call(getPosts);
    yield put(setPosts({data, loading: false}));
}

export function* getAllPostsWorker() {
    yield call(handlePosts);
}

export function* postsWatcher() {
    yield takeEvery(ACTIONS.GET_POSTS, getAllPostsWorker);
} 