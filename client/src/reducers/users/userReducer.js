/**
 * Created by corentin on 22/01/17.
 */
import { browserHistory } from 'react-router';
import initialState from '../initialState';
import * as C from '../../actions/users/actionTypes';

export default (state = initialState.user, action) => {
  switch(action.type){
    case C.LOG_IN_SUCCESS:
      return {
        token: action.user.access_token,
        id: action.user.account_id,
        session: !!localStorage.access_token
      };

    case C.CREATE_USER_SUCCESS:
      browserHistory.push('/');
      return {
        token: undefined,
        id: undefined,
        session: !!localStorage.access_token
      };

    case C.FETCH_USER_SUCCESS:
      return{
        data: action.user,
        id: action.user._id,
        token: action.user.token,
        session: !!localStorage.access_token
      };

    case C.LOG_OUT_SUCCESS:
      browserHistory.push('/');
      return {
        data: undefined,
        token: undefined,
        id: undefined,
        session: !!localStorage.access_token
      };

    case C.DELETE_SUCCESS:
      browserHistory.push('/');
      return {
        data: undefined,
        token: undefined,
        id: undefined,
        session: !!localStorage.access_token
      };
    default:
      return state;
  }
};