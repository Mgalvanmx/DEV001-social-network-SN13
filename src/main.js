import { db } from './lib/firebase.js';
import { juanpatricio } from './componentes/login.js';

const documento = document.querySelector('body');

window.onload = juanpatricio(db, documento);

