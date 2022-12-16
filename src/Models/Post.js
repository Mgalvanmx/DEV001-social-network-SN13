import {addDoc, collection, getDocs} from 'firebase/firestore';
import { async } from 'regenerator-runtime';
import {db} from '../components/firebase';

export const savePost = async (text) => {
return await addDoc(collection(db, 'posts'), {
    content:text
})
}

export const loadPosts = async () => {
   const querySnapshot = await  getDocs(collection(db, 'posts'))
   const posts = querySnapshot.docs.map(doc => doc.data())
   return posts
}