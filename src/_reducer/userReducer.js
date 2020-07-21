import React from 'react';
const { types } = require("../_types/types");

const initialState = {
  favourites: [],
  fetchingFavourites: false
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_FAVOURITE: 
      return {
        ...state,
        favourites: [...state.favourites, payload]
      }

    case types.SET_FAVOURITES:
      return {
        ...state,
        favourites: [...payload]
      }

    case types.FETCHING_FAVOURITES:
      return {
        ...state,
        fetchingFavourites: payload
      }

    default:
      return state;
  }
}