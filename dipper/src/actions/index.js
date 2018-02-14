import axios from 'axios';
import cookie from 'react-cookie';
import { AUTH_USER, UNAUTH_USER, ARTIST } from './types';
export const CLIENT_ROOT_URL = 'http://localhost:8080';

//= ===============================
// Utility actions
//= ===============================
const token = cookie.load('token')

export function loginWithFacebook(data) {
  return function (dispatch) {
    if (data) {
      cookie.save('token', data.accessToken, { path: '/' });
      cookie.save('user', data, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = `${CLIENT_ROOT_URL}/dashboard`;
    }
  };
}

export function logout() {
  return function (dispatch) {
    cookie.remove('token', { path: '/' });
    cookie.remove('user', { path: '/' });
    dispatch({ type: UNAUTH_USER, payload: false });
     window.location.href = `${CLIENT_ROOT_URL}/login`;
  };
}

export function searchArtist(name) {
  return function (dispatch) {
    name = name.split(' ').join('+');
    axios({
      url: 'https://itunes.apple.com/search?term='+`${name}`,
      methods: 'get'
    })
    .then((response)=>{
      dispatch({ type: ARTIST, payload: response.data.results });
    })
  };
}
