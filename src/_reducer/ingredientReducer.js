import React from 'react';
import { types } from '../_types/types';

const initialState = {
  relatedCocktails: [],
  activeIngredient: {},
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
  
    default:
      return state;
  }
}