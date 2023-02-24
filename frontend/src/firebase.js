import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBU7-KUzzkow45VNRBqu_zr_3dWImEs6s4",
  authDomain: "god-gift-login.firebaseapp.com",
  databaseURL: "https://god-gift-login-default-rtdb.firebaseio.com",
  projectId: "god-gift-login",
  storageBucket: "god-gift-login.appspot.com",
  messagingSenderId: "113288393496",
  appId: "1:113288393496:web:9d3e27ac20bc06e67be46d",
  measurementId: "G-L5VW1BM02G"
};
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default firebase;
export const storage = getStorage(app);
export const auth = getAuth();
