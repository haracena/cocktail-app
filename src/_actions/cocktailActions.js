const { types } = require("../_types/types");

export const startSearchCocktail = (cocktailName) => {
  return async (dispatch) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks != null) {
      dispatch(setCocktails(drinks));
    } else {
      // handle de cuando drinks es null, mostrar que no hay resultados
    }
  }
};

const setCocktails = (payload) => ({
  type: types.ADD_COCKTAILS,
  payload
});

export const startCocktailDetails = (idCocktail) => {
  return async (dispatch) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks != null) {
      dispatch(addCocktailDetails(drinks[0]));
    }
  }
};

export const startRandomCocktail = (cocktailName) => {
  return async (dispatch) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks != null) {
      dispatch(addCocktailDetails(drinks[0]));
    } else {
      // handle de cuando drinks es null, mostrar que no hay resultados
    }
  }
};

const addCocktailDetails = (payload) => ({
  type: types.ADD_COCKTAIL_DETAILS,
  payload
});