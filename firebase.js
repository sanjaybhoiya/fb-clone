// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhAS_p-wUHVgkfGMp0AjwbLZTY4xAR6nU",
  authDomain: "fbc-2-7ca27.firebaseapp.com",
  projectId: "fbc-2-7ca27",
  storageBucket: "fbc-2-7ca27.appspot.com",
  messagingSenderId: "739288535119",
  appId: "1:739288535119:web:106a8e4368ddd31ebdda3a"
};

// Initialize Firebase
const app = !firebase.app.lenght ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db, storage }