/**
 * Created by corentin on 22/01/17.
 */
import Axios from 'axios';
import config from '../../asset/configServer';

const usersUrl = config.apiUrl + '/users';

export const createUser = (user) => {
  return(dispatch) => {
    return Axios({
      method: 'post',
      url: usersUrl,
      headers: {
        'Accept':'application/vnd.api+json',
        'Content-Type':'application/vnd.api+json'
      },
      data: {
        'data': {
          'type':'users',
          'attributes': {
            'pseudo': user.pseudo,
            'password': user.password
          }
        }
      }
    })
      .then(response => {
        dispatch(createUserSuccess(response.data));
    })
      .catch(error => {
        throw(error);
      });
  };
};

export const createUserSuccess = (user) => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user
  }
};

export const login = (user) => {
  return(dispatch) => {
    return Axios.post(usersUrl + '/login', user)
      .then(response => {
        localStorage.setItem('access_token', response.data.access_token);
        dispatch(fetchUserSuccess(response.data.user))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user
  }
};

export const fetchUserByToken = (access_token) => {
  return (dispatch) => {
    return Axios.get(usersUrl, access_token)
      .then((response) => {
        console.log(response.data);
        dispatch(fetchUserSuccess(response.data));
      }) .catch(error => {
        throw(error);
      });
  };
};