import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startSearchCocktail } from '../../../_actions/cocktailActions';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const SearchBar = () => {
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

  return (
    <form onSubmit={handleSubmit} style={{ width: '350px' }}>
      <Search
        placeholder='cocktail'
        name='search'
        value={searchValue}
        onChange={handleChange}
        onSearch={handleSearch}
        enterButton
      />
    </form>
  );
};

export default SearchBar;
