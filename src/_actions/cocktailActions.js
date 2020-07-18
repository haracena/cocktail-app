const { types } = require("../_types/types");
const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const startSearchCocktail = (cocktailName) => {
  return async (dispatch) => {
    const response = await fetch(`${API_URL}search.php?s=${cocktailName}`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks != null) {
      dispatch(setCocktails(drinks));
      dispatch(addActiveSearch(cocktailName));
    } else {
      // handle de cuando drinks es null, mostrar que no hay resultados
    }
  }
};

export const startSearchByCategory = (category) => {
  return async (dispatch) => {
    const response = await fetch(`${API_URL}filter.php?c=${category}`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks != null) {
      dispatch(setCocktails(drinks));
      dispatch(addActiveSearch(category));
    }
  }
}

export const startSearchByAlcoholic = (type) => {
  return async (dispatch) => {
    const response = await fetch(`${API_URL}filter.php?a=${type}`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks != null) {
      dispatch(setCocktails(drinks));
      dispatch(addActiveSearch(type));
    }
  }
}

const setCocktails = (payload) => ({
  type: types.ADD_COCKTAILS,
  payload
});

export const startCocktailDetails = (idCocktail) => {
  return async (dispatch) => {
    const response = await fetch(`${API_URL}lookup.php?i=${idCocktail}`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks != null) {
      dispatch(addCocktailDetails(drinks[0]));
    }
  }
};

export const startRandomCocktail = (cocktailName) => {
  return async (dispatch) => {
    const response = await fetch(`${API_URL}random.php`);
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

export const addActiveSearch = (searchType) => ({
  type: types.ADD_ACTIVE_SEARCH,
  payload: searchType
})