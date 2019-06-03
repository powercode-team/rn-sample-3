import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import userReducer from './user';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user'],
};

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  blacklist: ['userId'],
};

const reducers = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

export default persistReducer(rootPersistConfig, reducers);
