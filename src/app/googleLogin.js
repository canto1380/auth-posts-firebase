import {
    GoogleAuthProvider,
    signInWithPopup
  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

  import { auth } from "./firebase.js";
  import { showMessage } from "./showMessagez.js";

  /***** SIGNIN WITH GOOGLE *****/
const btnAuthGoogle = document.querySelector('#googleLogin')
btnAuthGoogle.addEventListener('click', e => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
  .then(result => {
    showMessage("Welcome " + result.user.email)
  })
  .catch(error => {
    console.log(error)
  })
})