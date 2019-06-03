import { createAction } from 'redux-actions';

export const signUpAction = createAction('SIGN_UP', (firstName, lastName, password, cb) => ({
  firstName,
  lastName,
  password,
  cb,
}));

export const setUserIdAction = createAction('SET_USER_ID', id => ({
  id,
}));

export const updateUserAction = createAction(
  'UPDATE_USER',
  (userId, updatableFields, cb, calculate = false, isLastData = false) => ({
    userId,
    updatableFields,
    cb,
    calculate,
    isLastData,
  })
);

export const sendUserCoremetrixIdAction = createAction(
  'SEND_USER_COREMETRIX_ID',
  (userId, puid) => ({
    userId,
    puid,
  })
);
