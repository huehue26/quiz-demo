import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC3plvq91Orkfi0AS03Myu5_T4mhEdOtAA",
  authDomain: "quiz-f4df7.firebaseapp.com",
  projectId: "quiz-f4df7",
  storageBucket: "quiz-f4df7.appspot.com",
  messagingSenderId: "249198349069",
  appId: "1:249198349069:web:2dc309b25b3e2fdbc0fe44",
  measurementId: "G-YJM2T6HE9J",
});

export const auth = app.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export const db = getFirestore();
