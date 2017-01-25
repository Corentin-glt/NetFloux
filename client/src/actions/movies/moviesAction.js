/**
 * Created by corentin on 25/01/17.
 */
import * as requestApi from '../apiRequest';
import * as C from './actionTypes';
import {movieSerializer} from '../../serializers/movie';

export const createMovieSuccess = (movie) => {
  return {
    type: C.CREATE_MOVIE_SUCCESS,
    movie
  }
};

export const createMovie = (movie) => {
  return(dispatch) => {
    const data = movieSerializer.serialize(movie);
    return requestApi.postRequest('movies', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
        throw(err);
      })
  }
};

