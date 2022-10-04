import {
    signOut
  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  import { auth } from "./firebase.js";

  /***** LOGOUT *****/
const idLogout = document.querySelector('#logout')
idLogout.addEventListener('click', e => {
  e.preventDefault();
  signOut(auth).then(() => console.log('Sign out'))
})