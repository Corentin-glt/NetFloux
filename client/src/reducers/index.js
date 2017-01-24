/**
 * Created by corentin on 21/01/17.
 */
import { combineReducers } from 'redux';
import user from './users/userReducer';

export default combineReducers({
  user: user
});