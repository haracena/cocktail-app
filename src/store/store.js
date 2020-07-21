import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { cocktailReducer } from '../_reducer/cocktailReducer';
import thunk from 'redux-thunk';
import { ingredientReducer } from '../_reducer/ingredientReducer';
import { authReducer } from '../_reducer/authReducer';
import { userReducer } from '../_reducer/userReducer';

const reducers = combineReducers({
  cocktail: cocktailReducer,
  ingredient: ingredientReducer,
  auth: authReducer,
  user: userReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);