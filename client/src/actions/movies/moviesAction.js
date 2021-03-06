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
    movies,
    imNotUser: false
  }
};

export const deleteMovieSuccess = (movie) => {
  return {
    type: C.DELETE_MOVIE_SUCCESS,
    movie
  }
};

export const fetchAllMoviesSuccess = (movies) => {
  return {
    type: C.FETCH_MOVIES_SUCCESS,
    movies,
    imNotUser: true
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
  console.log(user);
  return(dispatch) => {
    let filter = {simple: {users: {_id: user.id}}};
    return requestApi.getRequest('movies', filter, 'users')
      .then((response) => {
        const moviesTab = [];
          return movieSerializer.deserialize(response.data)
            .then(response => {
              response.map(movie => {
                moviesTab.push(movie);
              });
              dispatch(fetchAllMovieByUserSuccess(moviesTab));
            })
            .catch(err => {throw(err)});
    })
      .catch(err => {throw(err)});
  }
};

export const deleteMovie = (movie) => {
  return(dispatch) => {
    return requestApi.deleteRequest('movies', movie.id)
      .then(() => {
        console.log('Movie: ' + movie.id + ' deleted!');
        dispatch(deleteMovieSuccess(movie));
      })
      .catch(err => {throw(err)});
  }
};

export const fetchAllMovies = () => {
  return (dispatch) => {
    return requestApi.getRequest('movies')
      .then((response) => {
        const moviesTab = [];
        return movieSerializer.deserialize(response.data)
          .then(response => {
            response.map(movie => {
              moviesTab.push(movie);
            });
            dispatch(fetchAllMoviesSuccess(moviesTab));
          })
          .catch(err => {throw(err)});
      })
      .catch(err => {throw(err)});
  }
};

export const deleteAllMovieOfUser = (movies) => {
  return (dispatch) => {
    movies.map(movie => {
      return requestApi.deleteRequest('movies', movie.id)
        .then(() => {
          console.log('Movie: ' + movie.id + ' deleted!');
          dispatch(deleteMovieSuccess(movie));
        })
        .catch(err => {throw(err)});
    })
  }
};