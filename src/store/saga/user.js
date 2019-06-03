import { takeLatest, call, put } from 'redux-saga/effects';

import {
  signUpAction,
  setUserIdAction,
  updateUserAction,
  sendUserCoremetrixIdAction,
} from '../actions';

import NetworkService from '../../services/NetworkService';

function* signUpGenerator({ payload }) {
  try {
    const { firstName, lastName, password, cb } = payload;
    const response = yield call(NetworkService.signUp, firstName, lastName, password);

    if (response.ok) {
      // eslint-disable-next-line
      yield put(setUserIdAction(response.data._id));
      cb();
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    console.log('Error in signUpGenerator', error);
    // eslint-disable-next-line
    alert(error.message);
    payload.cb();
  }
}

function* updateUserGenerator({ payload }) {
  try {
    const { userId, updatableFields, cb, calculate, isLastData } = payload;
    const response = yield call(NetworkService.updateUser, userId, {
      ...updatableFields,
      calculate,
      isLastData,
    });

    if (response.ok) {
      cb();
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    console.log('Error in updateUserGenerator', error);
    // eslint-disable-next-line
    alert(error.message);
    payload.cb();
  }
}

function* sendUserCoremetrixIdGenerator({ payload }) {
  try {
    const { userId, puid } = payload;
    yield call(NetworkService.sendUserCoremetrixId, userId, puid);
  } catch (error) {
    console.log('Error in sendUserCoremetrixIdGenerator', error);
    // eslint-disable-next-line
    alert(error.message);
  }
}

function* watcher() {
  yield takeLatest(signUpAction, signUpGenerator);
  yield takeLatest(updateUserAction, updateUserGenerator);
  yield takeLatest(sendUserCoremetrixIdAction, sendUserCoremetrixIdGenerator);
}

export default watcher;
