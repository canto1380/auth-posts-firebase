import {
  FacebookAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";

/***** SIGNIN WITH FACEBOOK *****/
const btnAuthFacebook = document.querySelector('#faceLogin')
btnAuthFacebook.addEventListener('click', e => {
  const provider = new FacebookAuthProvider()
  signInWithPopup(auth, provider)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
})