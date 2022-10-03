/** FIREBASE **/
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  // FacebookAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
/** FUNCIONES **/
import { loginCheck } from "./app/checkLogin.js";
import { auth, db } from "./app/firebase.js";
import { setupPosts } from "./app/listPosts.js";
import './app/facebookLogin.js'
import './app/googleLogin.js'
import './app/logout.js'
import './app/signinForm.js'
import './app/signupForm.js'


/***** FUNCTION WINDOWS PRINCIPAL *****/
window.addEventListener('DOMContentLoaded', async () => {
  // const querySnapshot = await getLists();
  // querySnapshot?.forEach((doc => {
  //   console.log(doc.data())
  // }))
})
// const getLists = () => getDocs(collection(db,'posts'))


/***** GET POSTS *****/
// lists for auth state changes
onAuthStateChanged(auth, async(user) => {
  if(user) {
    loginCheck(user)
    const querySnapshot = await getDocs(collection(db, 'posts'));
    setupPosts(querySnapshot.docs)
  } else {
    loginCheck(user)
    setupPosts([])
  }
})