// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx_NIPoHRBznwHvNnJlWIyrz9sfErgNNY",
  authDomain: "netflix-clone-a0be1.firebaseapp.com",
  projectId: "netflix-clone-a0be1",
  storageBucket:  "netflix-clone-a0be1.appspot.com",
  messagingSenderId: "48477848506",
  appId: "1:48477848506:web:96e330e9e76a4329cbd383"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

