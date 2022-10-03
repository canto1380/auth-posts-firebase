import {
    createUserWithEmailAndPassword
  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

  import { auth } from "./firebase.js";

  /***** SIGNUP *****/
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const signupEmail = document.querySelector("#signup-email").value;
  const signupPass = document.querySelector("#signup-password").value;

  createUserWithEmailAndPassword(auth, signupEmail, signupPass)
    .then((userCredential) => {
      // Reset modal
      signupForm.reset();
      // Close modal
      $("#signupModal").modal("hide");

      // console.log("sign up");
    })
    .catch((error) => {
      console.log(error);
    });
});