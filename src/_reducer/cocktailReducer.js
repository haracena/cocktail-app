import React from 'react';
import { types } from '../_types/types';

const initialState = {
  cocktails: [],
  activeCocktail: {},
}

export const cocktailReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case types.ADD_COCKTAILS:
      return {
        ...state,
        cocktails: [...action.payload]
      };
    
    case types.ADD_COCKTAIL_DETAILS:
      return {
        ...state,
        activeCocktail: action.payload
      }

    default:
      return state;
  }
}