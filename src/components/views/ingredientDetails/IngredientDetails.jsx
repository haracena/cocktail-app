import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSearchIngredient, startSearchByIngredientName } from '../../../_actions/ingredientActions';
import IngredientSidebar from './IngredientSidebar';
import './ingredientDetails.scss';
import DrinksRelated from './DrinksRelated';


const IngredientDetails = () => {
  const { ingredientName } = useParams();
  const dispatch = useDispatch();
  const { activeIngredient } = useSelector(state => state.ingredient);
  const { relatedCocktails } = useSelector(state => state.ingredient);
  
  useEffect(() => {
    console.log('use effect ingredient');
    dispatch(startSearchIngredient(ingredientName));
    dispatch(startSearchByIngredientName(ingredientName));
  }, [ingredientName, dispatch]);
  
  return (
    <Row>
      <Col xs={24} md={10}>
        <IngredientSidebar ingredientValues={activeIngredient} ingredientName={ingredientName} />
      </Col>
      <Col xs={24} md={14}>
        <div className='ingredient-list'>
          <DrinksRelated drinks={relatedCocktails} />
        </div>
      </Col>
    </Row>
  );
};

export default IngredientDetails;