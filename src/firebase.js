
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyD5Rq5MDQ8I2JsbsnPufP2VymuPy6xlpc0",
  authDomain: "cryptopunk-cl.firebaseapp.com",
  projectId: "cryptopunk-cl",
  storageBucket: "cryptopunk-cl.appspot.com",
  messagingSenderId: "5278550979",
  appId: "1:5278550979:web:e43ae580f29d8fa68b8b76",
  measurementId: "G-VD55C6EBC5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();    // for database

export default db;

