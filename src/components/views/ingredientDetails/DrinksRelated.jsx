import React from 'react';
import { Row, Col, Divider } from 'antd';
import CardList from '../../shared/CardList';

const DrinksRelated = ({ drinks }) => {
  return (
    <div>
      <CardList list={drinks} xl={6} title='Drinks related' />
    </div>
  )
}

export default DrinksRelated;
