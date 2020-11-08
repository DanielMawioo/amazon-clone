import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqSI9zGi1OrxI2W6tmr8fTdEZNDUupzzk",
  authDomain: "clone-4aae4.firebaseapp.com",
  databaseURL: "https://clone-4aae4.firebaseio.com",
  projectId: "clone-4aae4",
  storageBucket: "clone-4aae4.appspot.com",
  messagingSenderId: "379391556211",
  appId: "1:379391556211:web:005677d72cb02858110806",
  measurementId: "G-FFYDZ9ZVGW"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };