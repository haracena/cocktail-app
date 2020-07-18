import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  startSearchCocktail,
  startSearchByCategory,
  startSearchByAlcoholic,
} from '../../../_actions/cocktailActions';
import { Input, Button, Row, Col } from 'antd';
const { Search } = Input;

const SearchBar = ({ activeSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim().length > 0) {
      dispatch(startSearchCocktail(searchValue));
    }
  };

  const handleSearch = () => {
    if (searchValue.trim().length > 0) {
      dispatch(startSearchCocktail(searchValue));
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleCategoryClick = (category) => {
    dispatch(startSearchByCategory(category));
  };

  const handleAlcoholicClick = (type) => {
    dispatch(startSearchByAlcoholic(type));
  };

  return (
    <form onSubmit={handleSubmit} className='header__box__search'>
      <Search
        placeholder='drink name'
        name='search'
        value={searchValue}
        onChange={handleChange}
        onSearch={handleSearch}
        enterButton
      />
      <Row justify='center' gutter={[8, 8]} style={{ paddingTop: 10 }}>
        <Col>
          <Button
            onClick={() => {
              handleCategoryClick('Cocktail');
            }}
            disabled={activeSearch === 'Cocktail' ? true : false}
          >
            Cocktail
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              handleCategoryClick('Ordinary_Drink');
            }}
            disabled={activeSearch === 'Ordinary_Drink' ? true : false}
          >
            Ordinary drink
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              handleAlcoholicClick('Alcoholic');
            }}
            disabled={activeSearch === 'Alcoholic' ? true : false}
          >
            Alcoholic
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              handleAlcoholicClick('Non_Alcoholic');
            }}
            disabled={activeSearch === 'Non_Alcoholic' ? true : false}
          >
            Non Alcoholic
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default SearchBar;
