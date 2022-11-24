import { db } from './lib/firebase.js';

const rootSection = document.querySelector('#root');
const btnLogin = document.querySelector('#btnLogin');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const logIn = () => {
  const formTemplate = `
  <form action="">
  <input id="username" type="text" placeholder="Username">
  <input id="password" type="password" placeholder="Password">
  <button id="btnLogin" type="button">Login</button>
  </form>
`;
  rootSection.innerHTML += formTemplate;
};

window.onload = logIn();

const userData = () => {
  db.collection('userLogin').add({
    username: username.value,
    bio: password.value,
  });
  username.value = '';
  password.value = '';
};
btnLogin.addEventListener('click', userData());
