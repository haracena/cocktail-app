import React, { Fragment } from 'react';
import { getIngredientImg } from '../../../helpers/getCocktailDetails';
import './ingredientDetails.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../shared/Loading';
import { Empty } from 'antd';

const IngredientSidebar = ({ ingredientName }) => {
  const { activeIngredient } = useSelector((state) => state.ingredient);
  const { fetchingActiveIngredient } = useSelector((state) => state.ingredient);
  const [img, setImg] = useState('');

  useEffect(() => {
    if (activeIngredient.strIngredient !== undefined) {
      setImg(getIngredientImg(activeIngredient.strIngredient));
    }
  }, [activeIngredient]);

  return (
    <div className='ingredient-sidebar'>
      {fetchingActiveIngredient ? (
        <Loading color='black' />
      ) : activeIngredient.length === 0 ? (
        <Empty />
      ) : (
        <Fragment>
          <h1 className='ingredient-sidebar__title'>
            {activeIngredient.strIngredient}
          </h1>
          <div
            className='ingredient-sidebar__image'
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
          {activeIngredient.strDescription && (
            <div className='ingredient-sidebar__history'>
              <h2 className='ingredient-sidebar__subtitle'>History</h2>
              <p className='ingredient-sidebar__history__text'>
                {activeIngredient.strDescription}
              </p>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default IngredientSidebar;
