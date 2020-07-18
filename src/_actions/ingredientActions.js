const { types } = require("../_types/types");

export const startSearchByIngredientName = (ingredient) => {
  return async (dispatch) => {
    dispatch(fetchingRelatedCocktails(true));
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks != null) {
      dispatch(setRelatedCocktails(drinks));
      dispatch(fetchingRelatedCocktails(false));
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
    dispatch(fetchingActiveIngredient(true));
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`);
    const data = await response.json();
    const { ingredients } = data;
    if (ingredients != null) {
      dispatch(setActiveIngredient(ingredients[0]));
      dispatch(fetchingActiveIngredient(false));
    }
  } 
}

const setActiveIngredient = (payload) => ({
  type: types.ADD_INGREDIENT_ACTIVE,
  payload
})

const fetchingRelatedCocktails = (isLoading) => ({
  type: types.FETCHING_RELATED_COCKTAILS,
  payload: isLoading
})

const fetchingActiveIngredient = (isLoading) => ({
  type: types.FETCHING_ACTIVE_INGREDIENT,
  payload: isLoading
})