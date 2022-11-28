import { db } from './lib/firebase.js';
import { logIn } from './componentes/login.js';

const documento = document.querySelector('body');

window.onload = logIn(db, documento);

