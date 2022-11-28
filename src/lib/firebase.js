import {
  addDoc,
  collection,
  initializeApp,
  getFirestore,
} from './firebase-imports.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCkD69li7OY4KM6LvGVOcBHZjg8wPRTngY',
  authDomain: 'rrss-peliculas.firebaseapp.com',
  projectId: 'rrss-peliculas',
  storageBucket: 'rss-peliculas.appspot.com',
  messagingSenderId: '700965177786',
  appId: '1:700965177786:web:f577aa4d2e9f4ba5a5f583',
  measurementId: 'G-VBM6GMN9EZ',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const saveUser = (user, password) => {
  addDoc(collection(db, 'userLogin'), { user, password });
};
