import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { cocktailReducer } from '../_reducer/cocktailReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  cocktail: cocktailReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);