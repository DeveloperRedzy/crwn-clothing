import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBfIWcP_59X3J45vrsL6wrr2X1brTOAaxM',
  authDomain: 'crwnclothing-data-base.firebaseapp.com',
  projectId: 'crwnclothing-data-base',
  storageBucket: 'crwnclothing-data-base.appspot.com',
  messagingSenderId: '377318793444',
  appId: '1:377318793444:web:833964fe10136a6f80ccf1',
  measurementId: 'G-RVERZYZSVF',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
