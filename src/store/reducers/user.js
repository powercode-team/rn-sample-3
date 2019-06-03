import { handleActions } from 'redux-actions';

import { setUserIdAction } from '../actions';

const initialState = {
  userId: '5ca367dd6b41c924b66d5773',
};

const userReducer = handleActions(
  {
    [setUserIdAction]: (state, { payload }) => ({
      ...state,
      userId: payload.id,
    }),
  },
  initialState
);

export default userReducer;
