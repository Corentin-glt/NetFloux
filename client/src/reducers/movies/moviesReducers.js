/**
 * Created by corentin on 25/01/17.
 */
import { browserHistory } from 'react-router';
import initialState from '../initialState';
import * as C from '../../actions/movies/actionTypes';

export default (state = initialState.movies, action) => {
  switch(action.type){
    case C.CREATE_MOVIE_SUCCESS:
      browserHistory.push('/Profile');
      return [
        ...state,
        Object.assign({}, action.movie)
      ];

    case C.FETCH_MOVIES_SUCCESS:
      browserHistory.push('/Profile');
      return action.movies;

    case C.DELETE_MOVIE_SUCCESS:
      const newState = Object.assign([], state);
      const indexOfMovieToDelete = state.findIndex(movie => {
        return movie.id == action.movie.id
      });
      newState.splice(indexOfMovieToDelete, 1);
      browserHistory.push('/Profile');
      return newState;

    default:
      return state;


  }
}