import { db } from './lib/firebase.js';

const rootSection = document.querySelector('#root');
// const btnLogin = document.querySelector('#btnLogin');
// const username = document.querySelector('#username');
// const password = document.querySelector('#password');
// const logIn = () => {
//   const formTemplate = `
//   <form>
//   <input id="username" type="text" placeholder="Username">
//   <input id="password" type="password" placeholder="Password">
//   <button id="btnLogin" type="submit">Login</button>
//   </form>
// `;
//   rootSection.innerHTML += formTemplate;
// };

// window.onload = logIn();

// btnLogin.addEventListener('submit', (e) => {
//   e.preventDefault();
//   db.collection('userLogin').add({
//     username: username.value,
//     bio: password.value,
//   });
//   username.value = '';
//   password.value = '';
// });
const juanpatricio = () => {
  const logIn = document.createElement('form');
  const formulario = `
      <input id="username" type="text" placeholder="username">
      <input id="password" type="password" placeholder="password">
      <button id="btnLogin">Login</button>`;
  logIn.innerHTML = formulario;
  const btnLogin = logIn.querySelector('#btnLogin');
  const username = logIn.querySelector('#username');
  const password = logIn.querySelector('#password');
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('userLogin').add({
      username: username.value,
      bio: password.value,
    });
    username.value = '';
    password.value = '';
  });
  rootSection.insertAdjacentElement('beforeend', logIn);

};

window.onload = juanpatricio;
