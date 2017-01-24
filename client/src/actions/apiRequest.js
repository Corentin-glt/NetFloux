/**
 * Created by corentin on 23/01/17.
 */
import Axios from 'axios';
import Qs from 'qs';
import config from '../../config/configServer';

const configUrl = config.apiUrl;

export function postRequest(typeToFind, data){
  delete data.data.id;
  return Axios({
    method: 'post',
    url: `${configUrl}/${typeToFind}`,
    headers: {
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    },
    data: data,
  });
}

export function patchRequest(typeToFind, data){
  return Axios({
    method: 'patch',
    url: `${configUrl}/${typeToFind}/${data.data.id}`,
    headers: {
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    },
    data: data,
  });
}

export function deleteRequest(typeToFind, id){
  return Axios({
    method: 'delete',
    url: `${configUrl}/${typeToFind}/${id}`,
    headers: {
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    }
  });
}

export function getByIdRequest(typeToFind, id){
  return Axios({
    method: 'get',
    url: `${configUrl}/${typeToFind}/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    responseType: 'json'
  })
}

export function getRequest(typeToFind, filter, include){
  return Axios({
    method: 'get',
    url: `${configUrl}/${typeToFind}`,
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      filter,
      include
    },
    paramsSerializer: params => {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
    responseType: 'json'
  });
}

export function loginRequest(user) {
  return Axios({
    url: `${configUrl}/users/login`,
    timeout: 20000,
    method: 'post',
    data: user,
    responseType: 'json'
  });
}

export function logoutRequest(user) {
  return Axios({
    url: `${configUrl}/users/logout`,
    timeout: 20000,
    method: 'post',
    data: user,
    responseType: 'json'
  });
}