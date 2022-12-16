//Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCkD69li7OY4KM6LvGVOcBHZjg8wPRTngY',
  authDomain: 'rrss-peliculas.firebaseapp.com',
  projectId: 'rrss-peliculas',
  storageBucket: 'rrss-peliculas.appspot.com',
  messagingSenderId: '700965177786',
  appId: '1:700965177786:web:f577aa4d2e9f4ba5a5f583',
  measurementId: 'G-VBM6GMN9EZ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const saveUser = (user, password) => {	
  addDoc(collection(db, 'userLogin'), { user, password });	
};	
 
/*export const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });*/