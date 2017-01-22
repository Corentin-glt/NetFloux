/**
 * Created by corentin on 21/01/17.
 */
import { combineReducers } from 'redux';
import users from './userReducer';

export default combineReducers({
  users: users
});