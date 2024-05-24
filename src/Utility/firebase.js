// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAuth } from "firebase/auth";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApJmaf59qHB5S56ufK_vP9-Q1NbQei0vs",
  authDomain: "e-clone-njd.firebaseapp.com",
  projectId: "e-clone-njd",
  storageBucket: "e-clone-njd.appspot.com",
  messagingSenderId: "628579824815",
  appId: "1:628579824815:web:9ee9c3d24cded2fea1505a",
  measurementId: "G-NJETP796XB"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);


export const auth= getAuth(app)
export const db=app.firestore()