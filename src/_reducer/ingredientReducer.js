import React from 'react';
import { types } from '../_types/types';

const initialState = {
  relatedCocktails: [],
  fetchingRelatedCoctails: false,
  errorRelatedCocktails: false,
  activeIngredient: {},
  fetchingActiveIngredient: false,
  errorActiveIngredient: false
}

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT_ACTIVE:
      return {
        ...state,
        activeIngredient: action.payload
      }

    case types.ADD_RELATED_COCKTAILS:
      return {
        ...state,
        relatedCocktails: [...action.payload]
      }
    
    case types.FETCHING_RELATED_COCKTAILS:
      return {
        ...state,
        fetchingRelatedCoctails: action.payload
      }

    case types.FETCHING_ACTIVE_INGREDIENT:
      return {
        ...state,
        fetchingActiveIngredient: action.payload
      }
  
    default:
      return state;
  }
}