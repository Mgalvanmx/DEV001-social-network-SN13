const firebaseConfig = {
  apiKey: 'AIzaSyCkD69li7OY4KM6LvGVOcBHZjg8wPRTngY',
  authDomain: 'rrss-peliculas.firebaseapp.com',
  projectId: 'rrss-peliculas',
  storageBucket: 'rss-peliculas.appspot.com',
  messagingSenderId: '700965177786',
  appId: '1:700965177786:web:f577aa4d2e9f4ba5a5f583',
  measurementId: 'G-VBM6GMN9EZ',
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);
