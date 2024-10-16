// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqmA0sOYXtlX5ycSZ9OB-LOYZXavMcX-U",
    authDomain: "iism2024.firebaseapp.com",
    projectId: "iism2024",
    storageBucket: "iism2024.appspot.com",
    messagingSenderId: "46658532627",
    appId: "1:46658532627:web:11ba08ee9f1def9959d6e6"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };