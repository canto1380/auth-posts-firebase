import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAt5hm5DoqHu3iQG6tBjYhaLpPeP1J53Mg",
    authDomain: "auth-proyecto.firebaseapp.com",
    projectId: "auth-proyecto",
    storageBucket: "auth-proyecto.appspot.com",
    messagingSenderId: "1058041874796",
    appId: "1:1058041874796:web:4163a54028a25fd3850b49",
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)