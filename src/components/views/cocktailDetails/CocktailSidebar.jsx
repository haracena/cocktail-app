import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { startRandomCocktail } from '../../../_actions/cocktailActions';
import Loading from '../../shared/Loading';

const CocktailSidebar = () => {
  const dispatch = useDispatch();
  const { activeCocktail } = useSelector((state) => state.cocktail);
  const { fetchingActiveCocktail } = useSelector((state) => state.cocktail);

  const handleClick = () => {
    dispatch(startRandomCocktail());
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
          <Button type='link' block onClick={handleClick}>
            Next Random Drink
          </Button>
        </div>
      )}
    </div>
  );
};

export default CocktailSidebar;
