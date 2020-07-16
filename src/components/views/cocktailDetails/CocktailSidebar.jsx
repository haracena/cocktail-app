import React from 'react';
import {Button} from 'antd';
import { useDispatch } from 'react-redux';
import { startRandomCocktail } from '../../../_actions/cocktailActions';

const CocktailSidebar = ({cocktailValues}) => {
  const dispatch = useDispatch();

  const handleClick =  () => {
    dispatch(startRandomCocktail());
  }

  return (
    <div className='cocktail-sidebar'>
    <h1 className='cocktail-sidebar__title'>{cocktailValues.strDrink}</h1>
      <div
        className='cocktail-sidebar__image'
        style={{
          backgroundImage: `url(${cocktailValues.strDrinkThumb})`,
        }}
      />
      <h2 className='cocktail-sidebar__subtitle'>Instructions</h2>
      <p className='cocktail-sidebar__instruction'>
        {cocktailValues.strInstructions}
      </p>
      <Button type='link' block onClick={handleClick}>
        Next Random Drink
      </Button>
    </div>
  );
};

export default CocktailSidebar;
