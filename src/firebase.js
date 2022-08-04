import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp ( {
  apiKey: "AIzaSyBqzvLIx96Y9mrpiOCDvGgbeFEa-1VvJh4",
  authDomain: "clone-9c737.firebaseapp.com",
  projectId: "clone-9c737",
  storageBucket: "clone-9c737.appspot.com",
  messagingSenderId: "217043906789",
  appId: "1:217043906789:web:c484db47e9cb38e69ae40c",
  measurementId: "G-3PGSKR8NMK"
});


const auth = firebase.auth();
 
export {auth};