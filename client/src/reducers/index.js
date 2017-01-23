/**
 * Created by corentin on 21/01/17.
 */
import { combineReducers } from 'redux';
import user from './userReducer';

export default combineReducers({
  user: user
});