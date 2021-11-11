// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";
dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAbMJCEebCow2KEyGSx_U-5_7nx8NVi6QE",
  authDomain: "kokoo-1b369.firebaseapp.com",
  projectId: "kokoo-1b369",
  storageBucket: "kokoo-1b369.appspot.com",
  messagingSenderId: "476799669035",
  appId: "1:476799669035:web:5e37a20ba97dcee6eaeb6e",
  measurementId: "G-VNXLE42QTZ"
});
// const firebaseApp = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MESUREMENT_ID
// });

const db = getFirestore();

export default db;