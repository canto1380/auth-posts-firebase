import {
    GithubAuthProvider,
    signInWithPopup,
  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  import { auth } from "./firebase.js";
  import { showMessage } from "./showMessagez.js";
  
  /***** SIGNIN WITH FACEBOOK *****/
  const btnAuthGithub = document.querySelector('#githubLogin')
  btnAuthGithub.addEventListener('click', e => {
    e.preventDefault();
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider)
    .then(result => {
      showMessage("Welcome" + result.user.email)
    })
    .catch(error => {
      console.log(error)
    })
  })