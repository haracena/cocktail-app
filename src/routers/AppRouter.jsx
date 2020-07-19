import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import Loading from '../components/shared/Loading';
import NavBar from '../components/shared/NavBar';
// import HomePage from '../components/views/home/HomePage';
// import CocktailDetailsPage from '../components/views/cocktailDetails/CocktailDetailPage';
// import IngredientDetails from '../components/views/ingredientDetails/IngredientDetails';

const HomePage = lazy(() => import('../components/views/home/HomePage'));
const CocktailDetailsPage = lazy(() =>
  import('../components/views/cocktailDetails/CocktailDetailPage')
);
const IngredientDetails = lazy(() =>
  import('../components/views/ingredientDetails/IngredientDetails')
);

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loading height={100} color='black' />}>
        {/* <NavBar /> */}
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
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
