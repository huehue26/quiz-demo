import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB0Z8X9aaMkIFYazSgcoVsOKRLrdO90PRs",
  authDomain: "trial-quiz-d96ba.firebaseapp.com",
  projectId: "trial-quiz-d96ba",
  storageBucket: "trial-quiz-d96ba.appspot.com",
  messagingSenderId: "134355121873",
  appId: "1:134355121873:web:f12dc49204426f0c5e37f0",
});

export const auth = app.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();
