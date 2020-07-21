import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCg7aaU9bkNmYGJpQc0abUZKbo7FTRjaZw",
  authDomain: "cocktail-app-d2351.firebaseapp.com",
  databaseURL: "https://cocktail-app-d2351.firebaseio.com",
  projectId: "cocktail-app-d2351",
  storageBucket: "cocktail-app-d2351.appspot.com",
  messagingSenderId: "135699246851",
  appId: "1:135699246851:web:36908d3cd4c86314a14336"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  firebaseDB,
  googleAuthProvider,
  firebase
}