import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwBR5Wjg0Ej8si_fXoV2R6cyr99sdv-PY",
  authDomain: "thecloneof101.firebaseapp.com",
  projectId: "thecloneof101",
  storageBucket: "thecloneof101.appspot.com",
  messagingSenderId: "52982744990",
  appId: "1:52982744990:web:c81e9bafcece74715db88f"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;