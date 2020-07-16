import React, { Fragment } from 'react';
import { getIngredientImg } from '../../../helpers/getCocktailDetails';
import './ingredientDetails.scss';
import { useEffect } from 'react';

const IngredientSidebar = ({ ingredientValues, ingredientName }) => {
  const getImage = () => {
    return getIngredientImg(ingredientName);
  };

  return (
    <div className='ingredient-sidebar'>
      <h1 className='ingredient-sidebar__title'>
        {ingredientValues.strIngredient}
      </h1>
      <div
        className='ingredient-sidebar__image'
        style={{
          backgroundImage: `url(${getImage()})`,
        }}
      />
      {ingredientValues.strDescription && (
        <div className='ingredient-sidebar__history'>
          <h2 className='ingredient-sidebar__subtitle'>History</h2>
          <p className='ingredient-sidebar__history__text'>
            {ingredientValues.strDescription}
          </p>
        </div>
      )}
    </div>
  );
};

export default IngredientSidebar;
