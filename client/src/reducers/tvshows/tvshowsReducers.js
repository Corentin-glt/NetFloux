/**
 * Created by corentin on 27/01/17.
 */
import { browserHistory } from 'react-router';
import initialState from '../initialState';
import * as C from '../../actions/tvshows/actionTypes';

export default (state = initialState.tvshows, action) => {
  switch(action.type){

  	case C.CREATE_TVSHOW_SUCCESS:
  		browserHistory.push('/Profile');
  		return [
  			...state,
  			Object.assign({}, action.tvshow)
  		];

  	case C.DELETE_TVSHOW_SUCCESS:
	  	const newState = Object.assign([], state);
	  	const indexOfTvshowToDelete = state.findIndex(tvshow => {
	  		return tvshow.id = action.tvshow.id
	  	});
	  	newState.splice(indexOfTvshowToDelete, 1);
	  	browserHistory.push('/Profile');
	  	return newState;

  	case C.FETCH_TVSHOWS_SUCCESS:
	  	if(action.imNotUser) {
	  		browserHistory.push('/Tvshow');
	  	}
	  	else {
	  		browserHistory.push('/Profile');
	  	}
	  	return action.tvshows;

    default:
      return state;
  }
}

