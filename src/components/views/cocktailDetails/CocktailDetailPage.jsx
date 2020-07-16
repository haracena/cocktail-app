import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCocktailDetails } from '../../../_actions/cocktailActions';
import { getIngredientsMeasure } from '../../../helpers/getCocktailDetails';
import { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import './cocktailDetails.styles.scss';
import CardList from '../../shared/CardList';
import CocktailSidebar from './CocktailSidebar';
import { startSearchByIngredientName } from '../../../_actions/ingredientActions';

const CocktailDetailsPage = () => {
  const { cocktailId } = useParams();
  const [cocktailValues, setCocktailValues] = useState({});
  const [ingredientsMeasure, setIngredientsMeasure] = useState([]);
  const dispatch = useDispatch();
  const { activeCocktail } = useSelector((state) => state.cocktail);
  const { relatedCocktails } = useSelector((state) => state.ingredient);

  useEffect(() => {
    dispatch(startCocktailDetails(cocktailId));
  }, [cocktailId, dispatch]);

  useEffect(() => {
    setCocktailValues(activeCocktail);
    setIngredientsMeasure(getIngredientsMeasure(activeCocktail));
  }, [activeCocktail]);

  useEffect(() => {
    if (ingredientsMeasure.length > 0) {
      dispatch(startSearchByIngredientName(ingredientsMeasure[0].ingredient));
    }
  }, [ingredientsMeasure]);

  return (
    <div>
      <Row>
        <Col xs={24} md={8}>
          <CocktailSidebar cocktailValues={cocktailValues} />
        </Col>
        <Col xs={24} md={16}>
          {/* hacer componente aparte */}
          <div className='cocktail-list'>
            <Divider orientation='left'>Ingredients</Divider>
            <CardList list={ingredientsMeasure} />
            <Divider orientation='left'>Related Drinks</Divider>
            <CardList list={relatedCocktails} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CocktailDetailsPage;
