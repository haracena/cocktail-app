import React, { lazy, Suspense, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import Loading from '../components/shared/Loading';
import { firebase } from '../firebase/firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../_actions/authActions';
import { startLoadFavourites } from '../_actions/userActions';

const HomePage = lazy(() => import('../components/views/home/HomePage'));
const CocktailDetailsPage = lazy(() =>
  import('../components/views/cocktailDetails/CocktailDetailPage')
);
const IngredientDetails = lazy(() =>
  import('../components/views/ingredientDetails/IngredientDetails')
);
const LoginPage = lazy(() => import('../components/views/auth/LoginPage'))
const RegisterPage = lazy(() => import('../components/views/auth/RegisterPage'))
const FavouriteDrinksPage = lazy(() => import('../components/views/favouritesDrinks/FavouriteDrinksPage'));



const AppRouter = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user?.uid) {
        dispatch(login(user.uid, user.displayName));
        dispatch(startLoadFavourites(user.uid));
      } else {
      }
    })
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<Loading height={100} color='black' />}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/cocktail/:cocktailId'
            component={CocktailDetailsPage}
          />
          <Route
            exact
            path='/ingredient/:ingredientName'
            component={IngredientDetails}
          />
          <Route
            exact
            path='/login'
            component={LoginPage}
          />
          <Route
            exact
            path='/register'
            component={RegisterPage}
          />
          <Route
            exact
            path='/favourites'
            component={FavouriteDrinksPage}
          />
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
