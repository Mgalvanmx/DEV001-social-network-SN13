export const logIn = (db, documento) => {
  const formLogIn = document.createElement('form');
  const formulario = `
    <h2 class="title">Inicia sesión</h2>
    <label for="username">Dirección de correo electrónico</label>
    <input class="input" id="username" type="text" placeholder="ejemplo@ejemplo.com">
    <label for="password">Contraseña</label>
    <input class="input" id="password" type="password" placeholder="******">
    <button class="btnInitial" id="btnLogin">Iniciar Sesión</button>`;
  formLogIn.innerHTML = formulario;
  const btnLogin = formLogIn.querySelector('#btnLogin');
  const username = formLogIn.querySelector('#username');
  const password = formLogIn.querySelector('#password');
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    saveUser(username.value, password.value);
  });
  documento.insertAdjacentElement('beforeend', formLogIn);
};


