import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCob0zIwinydFErGl4LHCKQpsH0l_gZGfo",

  authDomain: "direitaapp.firebaseapp.com",

  projectId: "direitaapp",

  storageBucket: "direitaapp.appspot.com",

  messagingSenderId: "566866818089",

  appId: "1:566866818089:web:3b507218f301cdd4129838",

  measurementId: "G-G3RX0Z6STL",
});

// Initialize Firebase

const db = firebaseApp.firestore();

export default db;
