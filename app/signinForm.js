import {
    signInWithEmailAndPassword
  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  import { auth } from "./firebase.js";
  import { showMessage } from "./showMessagez.js";

  /***** SIGNIN *****/
const signinForm = document.querySelector('#signin-form')
signinForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const signinEmail = document.querySelector('#signin-email').value;
  const signinPass = document.querySelector('#signin-password').value;

  signInWithEmailAndPassword(auth, signinEmail, signinPass)
  .then((userCredential) => {
    // $("#signinModal").modal("hide");
    // const modal = bootstrap.Modal.getInstance(signinForm.closest('.modal'));
    // modal.hide()
    signinForm.reset();
    showMessage("Welcome" + result.user.email)
  })
  .catch((error) => {
    console.log(error)
  })
})