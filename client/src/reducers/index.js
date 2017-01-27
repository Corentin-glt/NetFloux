/**
 * Created by corentin on 21/01/17.
 */
import { combineReducers } from 'redux';
import user from './users/userReducer';
import movies from './movies/moviesReducers';
import tvshows from './tvshows/tvshowsReducers';

export default combineReducers({
  user: user,
  movies: movies,
  tvshows: tvshows
});