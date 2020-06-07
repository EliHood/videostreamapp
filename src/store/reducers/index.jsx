import {combineReducers} from 'redux';
import chatReducer from './chatReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
});
