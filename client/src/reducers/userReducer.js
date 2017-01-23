/**
 * Created by corentin on 22/01/17.
 */
import { browserHistory } from 'react-router';

export default (state = {}, action) => {
  switch(action.type){
    case 'CREATE_USER_SUCCESS':
      return Object.assign({}, state, action.user);
      break;

    case 'FETCH_USER_SUCCESS':
      return Object.assign({}, state, action.user);
      break;

    default:
      return state;
      break;
  }
};