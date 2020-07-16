const { types } = require("../_types/types");

export const startSearchByIngredientName = (ingredient) => {
  return async (dispatch) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks != null) {
      dispatch(setRelatedCocktails(drinks));
    }
    // porner validacion
  }
}

const setRelatedCocktails = (payload) => ({
  type: types.ADD_RELATED_COCKTAILS,
  payload
})

export const startSearchIngredient = (ingredientName) => {
  return async (dispatch) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`);
    const data = await response.json();
    const { ingredients } = data;
    if (ingredients != null) {
      dispatch(setActiveIngredient(ingredients[0]));
    }
  } 
}

const setActiveIngredient = (payload) => ({
  type: types.ADD_INGREDIENT_ACTIVE,
  payload
})