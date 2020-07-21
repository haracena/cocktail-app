import React from 'react';
import { types } from '../_types/types';

const initialState = {
  uid: '',
  name: '',
  fetchingAuth: false,
  authError: '',
}

export const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.LOGIN:
      return {
        ...state,
        uid: payload.uid,
        name: payload.displayName,
      }

    case types.LOGOUT:
      return {}
    
    case types.FETCHING_LOGIN:
      return {
        ...state,
        fetchingAuth: payload,
        errorLogin: '',
      }

    case types.AUTH_ERROR:
      return {
        ...state,
        authError: payload
      }

    default:
      return state;
  }
}