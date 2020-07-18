import React from 'react';
import { types } from '../_types/types';

const initialState = {
  cocktails: [],
  fetchingCocktails: false,
  errorCocktails: false,
  activeCocktail: {},
  fetchingActiveCocktail: false,
  errorActiveCocktail: false,
  activeSearch: ''
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
    
    case types.ADD_ACTIVE_SEARCH:
      return {
        ...state,
        activeSearch: action.payload
      }

    case types.FETCHING_COCKTAILS:
      return {
        ...state,
        fetchingCocktails: action.payload
      }

     case types.FETCHING_ACTIVE_COCKTAIL:
      return{
        ...state,
        fetchingActiveCocktail: action.payload
      } 

    default:
      return state;
  }
}