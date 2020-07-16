import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { cocktailReducer } from '../_reducer/cocktailReducer';
import thunk from 'redux-thunk';
import { ingredientReducer } from '../_reducer/ingredientReducer';

const reducers = combineReducers({
  cocktail: cocktailReducer,
  ingredient: ingredientReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);