/**
 * Created by corentin on 22/01/17.
 */
import * as requestApi from '../apiRequest';
import * as C from './actionTypes';
import {userSerializer} from '../../serializers/user';

export const createUserSuccess = (user) => {
  return {
    type: C.CREATE_USER_SUCCESS,
    user
  }
};

export const loginSuccess = (user) => {
  return {
    type: C.LOG_IN_SUCCESS,
    user
  }
};

export const fetchUserSuccess = (user) => {
  return {
    type: C.FETCH_USER_SUCCESS,
    user
  }
};

export const logoutSuccess = () => {
  return {
    type: C.LOG_OUT_SUCCESS
  }
};

export const createUser = (user) => {
  return(dispatch) => {
    const data = userSerializer.serialize(user);
    return requestApi.postRequest('users', data)
      .then(response => {
        console.log(response.data);
        dispatch(createUserSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        throw(error);
      });
  };
};

export const login = (user) => {
  return(dispatch) => {
    return requestApi.loginRequest(user)
      .then(response => {
        localStorage.setItem('access_token', response.data.access_token);
        dispatch(loginSuccess(response.data.user))
      })
      .catch(error => {
        throw(error);
      });
  };
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

export const logout = (user) => {
  return(dispatch) => {
    return requestApi.logoutRequest(user)
      .then(response => {
        localStorage.removeItem('access_token');
        dispatch(logoutSuccess())
      }) .catch(error => {
        throw(error);
      })
  }
};