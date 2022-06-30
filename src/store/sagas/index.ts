import { all } from 'redux-saga/effects';

import loginSaga, { logout as logoutSaga } from './loginSaga';
import booksSaga from './booksSaga';

function* rootSaga() {
  yield all([loginSaga(), booksSaga(), logoutSaga()]);
}

export default rootSaga;
