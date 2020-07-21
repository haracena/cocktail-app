import React, { Fragment, useEffect } from 'react';
import NavBar from '../../shared/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { Empty } from 'antd';
import { startLoadFavourites } from '../../../_actions/userActions';
import CardList from '../../shared/CardList';
import './favouriteDrinks.styles.scss';
import Loading from '../../shared/Loading';

const FavouriteDrinksPage = () => {
  const { favourites, fetchingFavourites } = useSelector((state) => state.user);
  // const { uid } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(startLoadFavourites(uid));
  }, []);

  return (
    <Fragment>
      <NavBar />
      {fetchingFavourites ? (
        <Loading />
      ) : favourites.length > 0 ? (
        <div className='favourite-list'>
          <CardList
            list={favourites}
            title='Favourite Drinks'
            orientation='center'
          />
        </div>
      ) : (
        <Empty description={<span>You have no favourite drinks</span>} />
      )}
    </Fragment>
  );
};

export default FavouriteDrinksPage;
