import { types } from "../_types/types"
import { firebaseDB } from "../firebase/firebase-config"


export const startAddFavourite = (drink) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      const docRef = await firebaseDB.collection(`${uid}/favourites/drinks`).add(drink);
      dispatch(startLoadFavourites(uid));
    } catch (error) {
      console.log(error);
    }
  }
}

export const startRemoveFavourite = (idDrink) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { favourites } = getState().user;
    const idTodelete = favourites.filter(drink => drink.idDrink === idDrink);
    console.log(idTodelete[0].id);
    try {
      await firebaseDB.doc(`${uid}/favourites/drinks/${idTodelete[0].id}`).delete();
      dispatch(startLoadFavourites(uid));
    } catch (error) {
      console.log(error);
    }
  }
}

export const startLoadFavourites = (uid) => {
  return async (dispatch) => {
    try {
      dispatch(fetchingFavourites(true));
      const favouritesSnap = await firebaseDB.collection(`${uid}/favourites/drinks`).get();
      const favourites = [];
      favouritesSnap.forEach(snapChild => {
        favourites.push({
          id: snapChild.id,
          ...snapChild.data()
        });
      });
      dispatch(setFavourites(favourites));
      dispatch(fetchingFavourites(false));
    } catch (error) {
      console.log(error);
      dispatch(fetchingFavourites(false));
    }
  }
}

const addFavourite = (drink) => ({
  type: types.ADD_FAVOURITE,
  payload: drink
})

const setFavourites = (favourites) => ({
  type: types.SET_FAVOURITES,
  payload: favourites
});

const fetchingFavourites = (isFetching) => ({
  type: types.FETCHING_FAVOURITES,
  payload: isFetching
});
