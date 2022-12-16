// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const imagenPrueba = document.createElement("img");

  imagenPrueba.src = "img/prueba.png";

  imagenPrueba.className = "imagen";
  buttonRegister.className = "boton1";
  buttonLogin.className = "boton2";

  buttonRegister.textContent = 'Register';
  buttonLogin.textContent = 'Login';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.append(imagenPrueba, buttonRegister, buttonLogin);


  return HomeDiv;
};