import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { startRandomCocktail } from '../../../_actions/cocktailActions';
import Loading from '../../shared/Loading';
import { useHistory } from 'react-router-dom';
import { startAddFavourite, startRemoveFavourite } from '../../../_actions/userActions';

const CocktailSidebar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { activeCocktail, fetchingActiveCocktail } = useSelector(
    (state) => state.cocktail
  );
  const { uid } = useSelector((state) => state.auth);
  const { favourites, fetchingFavourites } = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(startRandomCocktail());
  };

  const handleAddFavourite = () => {
    uid ? dispatch(startAddFavourite(activeCocktail)) : history.push('/login');
  };

  const handleRemoveFavourite = () => {
    uid ? dispatch(startRemoveFavourite(activeCocktail.idDrink)) : history.push('/login');
  };

  return (
    <div className='cocktail-sidebar'>
      {fetchingActiveCocktail ? (
        <Loading color='black' />
      ) : (
        <div>
          <h1 className='cocktail-sidebar__title'>{activeCocktail.strDrink}</h1>
          <div
            className='cocktail-sidebar__image'
            style={{
              backgroundImage: `url(${activeCocktail.strDrinkThumb})`,
            }}
          />
          <h2 className='cocktail-sidebar__subtitle'>Instructions</h2>
          <p className='cocktail-sidebar__instruction'>
            {activeCocktail.strInstructions}
          </p>
          {favourites.find(
            (drink) => drink.idDrink === activeCocktail.idDrink
          ) ? (
            <Button type='danger' block onClick={handleRemoveFavourite} disabled={fetchingFavourites ? true: false}>
              Remove from favourites
            </Button>
          ) : (
            <Button type='primary' block onClick={handleAddFavourite} disabled={fetchingFavourites ? true: false}>
              Add to favourites
            </Button>
          )}

          <Button type='link' block onClick={handleClick}>
            Next Random Drink
          </Button>
        </div>
      )}
    </div>
  );
};

export default CocktailSidebar;
