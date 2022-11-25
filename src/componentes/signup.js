export const signUp = (documento) => {
  const formSignUp = document.createElement('form');
  const formulario = `
      <h2 class="title">Crea una cuenta</h2>
      <label for="username">Nombre de usuario</label>
      <input class="input" id="username" type="text" placeholder="Nombre">
      <label for="email">Dirección de correo electrónico</label>
      <input class="input" id="emailInput" type="email" placeholder="ejemplo@ejemplo.com">
      <label for="password">Contraseña</label>
      <input class="input" id="password" type="password" placeholder="******">
      <button class="btnInitial" id="btnLogin">Registrarse</button>`;
  formSignUp.innerHTML = formulario;
  documento.insertAdjacentElement('beforeend', formSignUp);
};
