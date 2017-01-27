/**
 * Created by corentin on 27/01/17.
 */
import { browserHistory } from 'react-router';
import initialState from '../initialState';
import * as C from '../../actions/tvshows/actionTypes';

export default (state = initialState.tvshows, action) => {
  switch(action.type){
    default:
      return state;
  }
}

