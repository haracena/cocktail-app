import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import HomePage from '../components/views/home/HomePage';
import CocktailDetailsPage from '../components/views/cocktailDetails/CocktailDetailPage';

const AppRouter = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/cocktail/:cocktailId' component={ CocktailDetailsPage } />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;