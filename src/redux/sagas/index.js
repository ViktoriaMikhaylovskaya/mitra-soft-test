import { all } from 'redux-saga/effects';
import { postsWatcher } from './posts';
import { commentWatcher } from './comments';

function* rootWatcher() {
    yield all([
        postsWatcher(),
        commentWatcher()
    ])
}   

export default rootWatcher;