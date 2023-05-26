import { all } from 'redux-saga/effects';
import { postsWatcher } from './posts';
import { commentWatcher } from './comments';
import { userPostsWatcher } from './userPosts';
import { postsCountWatcher } from './postsCount';

function* rootWatcher() {
    yield all([
        postsWatcher(),
        commentWatcher(),
        userPostsWatcher(),
        postsCountWatcher()
    ])
}   

export default rootWatcher;