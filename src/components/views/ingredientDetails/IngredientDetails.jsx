import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startSearchIngredient,
  startSearchByIngredientName,
} from '../../../_actions/ingredientActions';
import IngredientSidebar from './IngredientSidebar';
import './ingredientDetails.scss';
import DrinksRelated from './DrinksRelated';
import Loading from '../../shared/Loading';
import NavBar from '../../shared/NavBar';

const IngredientDetails = () => {
  const { ingredientName } = useParams();
  const dispatch = useDispatch();
  const { relatedCocktails } = useSelector((state) => state.ingredient);
  const { fetchingRelatedCoctails } = useSelector((state) => state.ingredient);

  useEffect(() => {
    console.log('use effect ingredient');
    dispatch(startSearchIngredient(ingredientName));
    dispatch(startSearchByIngredientName(ingredientName));
  }, [ingredientName, dispatch]);

  return (
    <Fragment>
      <NavBar />
      <Row>
        <Col xs={24} md={10}>
          <IngredientSidebar ingredientName={ingredientName} />
        </Col>
        <Col xs={24} md={14}>
          <div className='ingredient-list'>
            {fetchingRelatedCoctails ? (
              <Loading height={100} />
            ) : (
              <DrinksRelated drinks={relatedCocktails} />
            )}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default IngredientDetails;
