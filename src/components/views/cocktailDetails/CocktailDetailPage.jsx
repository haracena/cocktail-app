import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCocktailDetails } from '../../../_actions/cocktailActions';
import { getIngredientsMeasure } from '../../../helpers/getCocktailDetails';
import { useState } from 'react';
import { Row, Col } from 'antd';
import './cocktailDetails.styles.scss';
import CardList from '../../shared/CardList';
import CocktailSidebar from './CocktailSidebar';
import { startSearchByIngredientName } from '../../../_actions/ingredientActions';
import Loading from '../../shared/Loading';
import NavBar from '../../shared/NavBar';

const CocktailDetailsPage = () => {
  const { cocktailId } = useParams();
  const [ingredientsMeasure, setIngredientsMeasure] = useState([]);
  const dispatch = useDispatch();
  const { activeCocktail } = useSelector((state) => state.cocktail);
  const { relatedCocktails } = useSelector((state) => state.ingredient);
  const { fetchingRelatedCoctails } = useSelector((state) => state.ingredient);

  useEffect(() => {
    dispatch(startCocktailDetails(cocktailId));
  }, [cocktailId, dispatch]);

  useEffect(() => {
    setIngredientsMeasure(getIngredientsMeasure(activeCocktail));
  }, [activeCocktail]);

  useEffect(() => {
    if (ingredientsMeasure.length > 0) {
      dispatch(startSearchByIngredientName(ingredientsMeasure[0].ingredient));
    }
  }, [ingredientsMeasure, dispatch]);

  return (
    <Fragment>
      <NavBar />
      <Row>
        <Col xs={24} md={12} xl={8}>
          <CocktailSidebar />
        </Col>
        <Col xs={24} md={12} xl={16}>
          <div className='cocktail-list'>
            {fetchingRelatedCoctails ? (
              <Loading height={100} />
            ) : (
              <div>
                <CardList list={ingredientsMeasure} title='Ingredients' />
                <CardList list={relatedCocktails} title='Related Drinks' />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CocktailDetailsPage;
