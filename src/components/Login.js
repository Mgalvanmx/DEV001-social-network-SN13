// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Login = () => {
  const LoginForm = document.createElement('form');
  let titulo = document.createElement("label");
  let cajaTextEmail = document.createElement("input");
  let cajaPassword = document.createElement("input");
  const buttonHome = document.createElement('button');
  

  titulo.innerHTML = '<h1>LOGIN</h1>';
  LoginForm.setAttribute('method', "post");
  LoginForm.setAttribute('action', "");
  cajaTextEmail.setAttribute('type', "text");
  cajaTextEmail.setAttribute('placeholder', "Email");
  cajaPassword.setAttribute('type', "password");
  cajaPassword.setAttribute('placeholder', "Password");
  buttonHome.textContent = 'Home';
  

  buttonHome.addEventListener('click', () => onNavigate('/wall'));


  LoginForm.append(titulo, cajaTextEmail, cajaPassword, buttonHome);

  /*document.getElementById('root').appendChild(HomeForm);*/
  return LoginForm;
};