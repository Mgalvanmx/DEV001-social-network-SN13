// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
/*import { FirebaseApp } from './firebase';*/
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
/*const auth = getAuth(FirebaseApp);*/

export const Register = (onNavigate) => {
  const HomeForm = document.createElement('form');
  let titulo = document.createElement("label");
  let cajaTextNombre = document.createElement("input");
  let cajaTextEmail = document.createElement("input");
  let cajaPassword = document.createElement("input");
  const buttonHome = document.createElement('button');
  const buttonRegister1 = document.createElement('button');
  const buttonLogin1 = document.createElement('button');

  titulo.innerHTML = '<h1>REGISTER</h1>';
  HomeForm.setAttribute('method', "post");
  HomeForm.setAttribute('action', "");
  cajaTextNombre.setAttribute('type', "text");
  cajaTextNombre.setAttribute('placeholder', "Name");
  cajaTextEmail.setAttribute('type', "text");
  cajaTextEmail.setAttribute('placeholder', "Email");
  cajaPassword.setAttribute('type', "password");
  cajaPassword.setAttribute('placeholder', "Password");
  buttonHome.textContent = 'Home';
  buttonRegister1.textContent = 'Registrarse';
  buttonLogin1.textContent = 'Ya tengo una cuenta';

  buttonHome.addEventListener('click', () => onNavigate('/'));
  buttonLogin1.addEventListener('click', () => onNavigate('/login'));

  buttonRegister1.addEventListener('click', e => {
    e.preventDefault()

    const name = cajaTextNombre.value;
    const mail = cajaTextEmail.value;
    const password = cajaPassword.value;
    
    async function registrarUsuario (){
      createUserWithEmailAndPassword(auth, email, password);
    }
    
    /*const registrarUsuario = async (text) => {
      return await addDoc(collection(db, 'posts'), {
          content:text
      })*/
   
});


  HomeForm.append(titulo, cajaTextNombre, cajaTextEmail, cajaPassword, buttonHome, buttonLogin1, buttonRegister1);

  /*document.getElementById('root').appendChild(HomeForm);*/
  return HomeForm;
};