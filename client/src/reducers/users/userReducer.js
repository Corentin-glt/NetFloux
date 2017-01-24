/**
 * Created by corentin on 22/01/17.
 */
import { browserHistory } from 'react-router';
import initialState from '../initialState';
import * as C from '../../actions/users/actionTypes';

export default (state = initialState.user, action) => {
  switch(action.type){
    case C.LOG_IN_SUCCESS:
      console.log(action.user);
      browserHistory.push('/');
      return {
        token: action.user.token,
        id: action.user._id,
        session: !!localStorage.access_token
      };

    case C.CREATE_USER_SUCCESS:
      browserHistory.push('/');
      break;

    case C.LOG_OUT_SUCCESS:
      browserHistory.push('/');
      return {
        token: '',
        id: '',
        session: !!localStorage.access_token
      };

    default:
      return state;
  }
};