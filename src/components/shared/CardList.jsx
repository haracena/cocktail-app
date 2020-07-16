import React from 'react';
import { Row, Col } from 'antd';
import CustomCard from './CustomCard';

const CardList = ({ list }) => {
  return (
    <Row gutter={[16, 16]}>
      {list ? (
        list.map((item) => (
          <Col xs={12} md={8} xl={4} key={item.ingredient ? item.ingredient : item.idDrink}>
            <CustomCard
              name={item.ingredient ? item.ingredient : item.strDrink}
              img={item.ingredient ? item.img : item.strDrinkThumb}
              id={item.idDrink && item.idDrink}
              measure={item.measure && item.measure}
            />
          </Col>
        ))
      ) : (
        <span>No hay resultados</span>
      )}
    </Row>
  );
};

export default CardList;
