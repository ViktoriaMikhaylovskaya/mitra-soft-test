import { all } from 'redux-saga/effects';
import { postsWatcher } from './posts';
import { commentWatcher } from './comments';
import { userPostsWatcher } from './userPosts';

function* rootWatcher() {
    yield all([
        postsWatcher(),
        commentWatcher(),
        userPostsWatcher()
    ])
}   

export default rootWatcher;