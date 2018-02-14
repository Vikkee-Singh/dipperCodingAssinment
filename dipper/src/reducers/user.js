import { AUTH_USER, UNAUTH_USER, ARTIST } from '../actions/types';

const INITIAL_STATE = {
authenticated: false,
artist:[] 
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case ARTIST:
      return { ...state, artist: action.payload };
  }

  return state;
}

// ARTIST