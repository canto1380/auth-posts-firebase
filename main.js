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
  FacebookAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAt5hm5DoqHu3iQG6tBjYhaLpPeP1J53Mg",
  authDomain: "auth-proyecto.firebaseapp.com",
  projectId: "auth-proyecto",
  storageBucket: "auth-proyecto.appspot.com",
  messagingSenderId: "1058041874796",
  appId: "1:1058041874796:web:4163a54028a25fd3850b49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

/***** FUNCTION WINDOWS PRINCIPAL *****/
window.addEventListener('DOMContentLoaded', async () => {
  // const querySnapshot = await getLists();
  // querySnapshot?.forEach((doc => {
  //   console.log(doc.data())
  // }))
})

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
  })
  .catch((error) => {
    console.log(error)
  })
})
/***** LOGOUT *****/
const idLogout = document.querySelector('#logout')
idLogout.addEventListener('click', e => {
  e.preventDefault();
  // console.log(idLogout)
  signOut(auth).then(() => console.log('Sign out'))
})

/*** VERIFICAR SI ESTAMOS AUTH PARA MOSTRART NAV ***/
const loginIn = document.querySelectorAll('.logged-in')
const loginOut = document.querySelectorAll('.logged-out')
const loginCheck = user => {
  if(user) {
   loginIn.forEach(link => link.style.display = 'block')
   loginOut.forEach(link => link.style.display = 'none')
  } else {
    loginOut.forEach(link => link.style.display = 'block')
    loginIn.forEach(link => link.style.display = 'nose')
  }
}

/***** GET POSTS *****/
const listPosts = document.querySelector('#posts')
// lists for auth state changes
onAuthStateChanged(auth, async(user) => {
  if(user) {
    loginCheck(user)
    const querySnapshot = await getDocs(collection(db, 'posts'));
    let html = ''
    querySnapshot.forEach((doc) =>{
      const posts = doc.data()
      const li =`
      <li class='list-group-item list-group-item-action'>
       <h5>${posts.title}</h5>
       <p>${posts.description}</p>
      </li>
      `
      html+= li;
    })
    listPosts.innerHTML = html
  } else {
    loginCheck(user)
    listPosts.innerHTML = '<h1 class="text-center">Logueate para ver las publicaciones</h1>'
  }
})

/***** SIGNIN WITH GOOGLE *****/
const btnAuthGoogle = document.querySelector('#googleLogin')
btnAuthGoogle.addEventListener('click', e => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
})

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

// const getLists = () => getDocs(collection(db,'posts'))