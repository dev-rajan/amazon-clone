// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAG5lEW4YjX7nAQRuxJEdulD5mYt-n5wMY",
  authDomain: "challange-32716.firebaseapp.com",
  projectId: "challange-32716",
  storageBucket: "challange-32716.appspot.com",
  messagingSenderId: "1011804773366",
  appId: "1:1011804773366:web:46d6f13c19ee6461ea45d7",
  measurementId: "G-PTXK7V7ZEV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
