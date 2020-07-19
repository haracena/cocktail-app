import React from 'react';
import SearchBar from './SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './home.style.scss';
import CardList from '../../shared/CardList';
import { startSearchByCategory } from '../../../_actions/cocktailActions';
import { UpOutlined } from '@ant-design/icons';
import { BackTop, Button, Empty } from 'antd';
import Loading from '../../shared/Loading';

const HomePage = () => {
  const dispatch = useDispatch();
  const { cocktails } = useSelector((state) => state.cocktail);
  const { activeSearch } = useSelector((state) => state.cocktail);
  const { fetchingCocktails } = useSelector((state) => state.cocktail);

  useEffect(() => {
    dispatch(startSearchByCategory('Cocktail'));
  }, []);

  return (
    <div>
      <div className='logo' />
      <div className='header'>
        <div className='header__box'>
          <SearchBar activeSearch={activeSearch} />
        </div>
      </div>
      <div className='card-list'>
        {fetchingCocktails ? (
          <Loading />
        ) : cocktails.length === 0 ? (
          <Empty description={<span>There is no results</span>} />
        ) : (
          <CardList
            list={cocktails}
            title={activeSearch}
            orientation='center'
          />
        )}
      </div>
      <BackTop duration={1000}>
        <Button shape='circle' type='primary' size='large'>
          <UpOutlined />
        </Button>
      </BackTop>
    </div>
  );
};

export default HomePage;
