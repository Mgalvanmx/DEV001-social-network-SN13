export const juanpatricio = (documento, saveUser) => {
  const logIn = document.createElement('form');
  const formulario = `
        <input id="username" type="text" placeholder="username" required>
        <input id="password" type="password" placeholder="password" required>
        <button id="btnLogin">Login</button>`;
  logIn.innerHTML = formulario;
  const btnLogin = logIn.querySelector('#btnLogin');
  const username = logIn.querySelector('#username');
  const password = logIn.querySelector('#password');
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    saveUser(username.value, password.value);
  });
  documento.insertAdjacentElement('beforeend', logIn);
};
