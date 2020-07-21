import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../_types/types';

export const startGoogleLogin = () => {
  return async (dispatch) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithPopup(googleAuthProvider);
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startLoginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(fetchingLogin(true));
      const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(login(user.uid, user.displayName));
      dispatch(fetchingLogin(false));
    } catch (error) {
      dispatch(fetchingLogin(false));
      dispatch(errorAuth(error.message));
    }
  };
};

export const startRegisterWithEmailPassword = (email, password, name) => {
  return async (dispatch) => {
    try {
      dispatch(fetchingLogin(true));
      const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await user.updateProfile({ displayName: name });
      dispatch(login(user.uid, user.displayName));
      dispatch(fetchingLogin(false));
      console.log(user);
    } catch (error) {
      dispatch(fetchingLogin(false));
      dispatch(errorAuth(error.message));
    }
  };
};

export const login = (uid, displayName) => ({
  type: types.LOGIN,
  payload: {
    uid,
    displayName,
  },
});

const fetchingLogin = (isFetching) => ({
  type: types.FETCHING_LOGIN,
  payload: isFetching
})

export const errorAuth = (errorMessage) => ({
  type: types.AUTH_ERROR,
  payload: errorMessage
})

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(errorLogout());
    } catch (error) {
    }
  }
}

const errorLogout = () => ({
  type:types.LOGOUT
})