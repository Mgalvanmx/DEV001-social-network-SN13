// eslint-disable-next-line import/no-cycle
import { async } from 'regenerator-runtime';
import { onNavigate } from '../main.js';
import { savePost, loadPosts } from '../Models/Post';



export const Wall = () => {
    const WallForm = document.createElement('form');
    let titulo = document.createElement("label");
    let cajaText = document.createElement("textarea");
    const buttonHome = document.createElement('button');
    const buttonSend = document.createElement('button');

    titulo.innerHTML = '<h1>WALL</h1>';
    WallForm.setAttribute('method', "post");
    WallForm.setAttribute('action', "");
    cajaText.setAttribute('type', "text");
    cajaText.setAttribute('placeholder', "Write...");
    buttonHome.textContent = 'Home';
    buttonSend.textContent = 'Send';

    buttonHome.addEventListener('click', () => onNavigate('/'));
    
    window.addEventListener ('DOMContentLoaded', async ( ) => {
        const posts = await loadPosts()
        console.log(posts);
        const postsList = document.getElementById('root');

        posts.forEach(post => {
            postsList.innerHTML += `
            <li>
            ${post.content}
            </li>
            `
        })
    })

    buttonSend.addEventListener('click', e => {
        e.preventDefault()
        savePost(cajaText.value);
       
    });
    
     WallForm.append(titulo, cajaText, buttonHome, buttonSend);

    /*document.getElementById('root').appendChild(HomeForm);*/
    return WallForm;
};