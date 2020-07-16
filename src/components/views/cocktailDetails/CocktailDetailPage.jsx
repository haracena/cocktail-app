import React from 'react';
import Ingredient from '../../shared/Ingredient';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCocktailDetails } from '../../../_actions/cocktailActions';
import { getIngredientsMeasure } from '../../../helpers/getCocktailDetails';
import { useState } from 'react';
import { Row, Col } from 'antd';
import './cocktailDetails.styles.scss';

const CocktailDetailsPage = () => {
  const { cocktailId } = useParams();
  const [cocktailValues, setCocktailValues] = useState({});
  const [ingredientsMeasure, setIngredientsMeasure] = useState([]);
  const dispatch = useDispatch();
  const { activeCocktail } = useSelector((state) => state.cocktail);

  useEffect(() => {
    dispatch(startCocktailDetails(cocktailId));
  }, [cocktailId, dispatch]);

  useEffect(() => {
    setCocktailValues(activeCocktail);
    setIngredientsMeasure(getIngredientsMeasure(activeCocktail));
  }, [activeCocktail]);

  return (
    <div>
      <Row>
        <Col xs={24} md={8}>
          {/* Separar por otro component llamado sidebar */}
          <div className='cocktail-sidebar'>
            <div className='cocktail-sidebar__image' style={{backgroundImage: `url(${cocktailValues.strDrinkThumb})`}} />
            <h1 className='cocktail-sidebar__title'>{cocktailValues.strDrink}</h1>
            <h2 className='cocktail-sidebar__subtitle'>Instructions</h2>
            <p className='cocktail-sidebar__instruction'>{cocktailValues.strInstructions}</p>
          </div>
        </Col>
        <Col xs={24} md={16}>
          {ingredientsMeasure &&
            ingredientsMeasure.map((item) => (
              <Ingredient
                key={item.ingredient}
                ingredient={item.ingredient}
                measure={item.measure}
              />
            ))}
        </Col>
      </Row>
    </div>
  );
};

export default CocktailDetailsPage;
