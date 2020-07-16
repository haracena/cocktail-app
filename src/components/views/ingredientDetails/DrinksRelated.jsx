import React from 'react';
import { Row, Col, Divider } from 'antd';
import CardList from '../../shared/CardList';

const DrinksRelated = ({ drinks }) => {
  return (
    <div>
      <Divider orientation='left'>Drinks Related</Divider>
      <CardList list={drinks} xl={6} />
    </div>
  )
}

export default DrinksRelated;
