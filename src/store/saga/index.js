import { all } from 'redux-saga/effects';

import userSaga from './user';

function* root() {
  yield all([userSaga()]);
}

export default root;
