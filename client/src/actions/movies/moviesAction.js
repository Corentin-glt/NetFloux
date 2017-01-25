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

export const fetchAllMovieByUserSuccess = (movies) => {
  return {
    type: C.FETCH_MOVIES_SUCCESS,
    movies
  }
};

export const createMovie = (movie) => {
  return(dispatch) => {
    const data = movieSerializer.serialize(movie);
    return requestApi.postRequest('movies', data)
      .then(response => {
        return movieSerializer.deserialize(response.data)
          .then((response) => {
            dispatch(createMovieSuccess(response));
          })
          .catch(err => {throw(err)});
      })
      .catch(err => {
        console.log(err);
        throw(err);
      })
  }
};

export const fetchAllMovieByUser = (user) => {
  return(dispatch) => {
    let filter = {simple: {users: {_id: user.data._id}}};
    return requestApi.getRequest('movies', filter, 'users')
      .then((response) => {
        let moviesTab = [];
        response.data.data.map(movie => {
          moviesTab.push(movie.attributes);
        });
        dispatch(fetchAllMovieByUserSuccess(moviesTab));
    })
      .catch(err => {throw(err)});
  }
};

