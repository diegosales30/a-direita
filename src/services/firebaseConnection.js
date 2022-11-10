import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8LUvaUzezF4OYygH_9kny0fd3nbvaRvA",

  authDomain: "brasilagora-bc85a.firebaseapp.com",

  projectId: "brasilagora-bc85a",

  storageBucket: "brasilagora-bc85a.appspot.com",

  messagingSenderId: "237081311389",

  appId: "1:237081311389:web:3b1050d9f87da597783c74",

  measurementId: "G-HV7KEMXGS0",
});

// Initialize Firebase

const db = firebaseApp.firestore();

export default db;
