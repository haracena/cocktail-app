import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
const { Meta } = Card;

const CustomCard = ({ id, name, img, measure }) => {

  return (
    <Link to={id ? `/cocktail/${id}` : `/ingredient/${name}`}>
      <Card
        hoverable
        cover={<img src={img} alt={name} />}
      >
        <Meta title={name} description={measure && measure}/>
      </Card>
    </Link>
  );
};

export default CustomCard;
