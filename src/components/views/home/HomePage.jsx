import React from 'react';
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './home.style.scss';
import CardList from '../../shared/CardList';

const HomePage = () => {

  const { cocktails } = useSelector(state => state.cocktail);

  useEffect(() => {
    console.log(cocktails);
  }, [cocktails])

  return (
    <div>
      <div className='header'>
        <div className='header__box'>
          <SearchBar />
        </div>
      </div>
      <div className='card-list'>
        <CardList list={ cocktails } />
      </div>
    </div>
  )
}

export default HomePage;
