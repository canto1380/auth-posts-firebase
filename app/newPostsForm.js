import { savePosts, db } from "./firebase.js";
import { showMessage } from "./showMessagez.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { setupPosts } from "./listPosts.js";


const addPosts = document.getElementById('add-posts-form');
const formAdd = document.querySelector('#add-form')
const btnAdd = document.querySelector('#btn-add')

export const aa  = async() => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    setupPosts(querySnapshot.docs)
}

addPosts.addEventListener('submit', (e) => {

    const title = addPosts['title-add'].value;
    const description = addPosts['description-add'].value;
    savePosts(title, description)
    addPosts.reset()
    showMessage("Task Added successfully")
    formAdd.style.display= 'none'
    btnAdd.textContent = 'Agregar'
    aa()
})