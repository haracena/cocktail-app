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