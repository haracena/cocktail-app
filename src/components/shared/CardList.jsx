import React, { Fragment } from 'react';
import { Row, Col, Divider } from 'antd';
import CustomCard from './CustomCard';
import { parseActiveSearchTitle } from '../../helpers/parseTitle';

const CardList = ({ list, xl = 4, title, orientation = 'left' }) => {
  return (
    <Fragment>
      <Divider orientation={orientation}>
        {title && parseActiveSearchTitle(title)}
      </Divider>
      <Row gutter={[16, 16]}>
        {list ? (
          list.map((item) => (
            <Col
              xs={12}
              md={8}
              xl={xl}
              key={item.ingredient ? item.ingredient : item.idDrink}
            >
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
    </Fragment>
  );
};

export default CardList;
