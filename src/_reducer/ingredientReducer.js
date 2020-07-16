import React from 'react';
import { types } from '../_types/types';

const initialState = {
  relatedCocktails: [],
  ingredient: [],
}

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT_ACTIVE:
      return {
        ...state,
        ingredient: [...action.payload]
      }

    case types.ADD_RELATED_COCKTAILS:
      return {
        ...state,
        relatedCocktails: [...action.payload]
      }
  
    default:
      return state;
  }
}