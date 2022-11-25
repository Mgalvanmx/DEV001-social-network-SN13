export const juanpatricio = (db, documento) => {
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
  documento.insertAdjacentElement('beforeend', logIn);
};
