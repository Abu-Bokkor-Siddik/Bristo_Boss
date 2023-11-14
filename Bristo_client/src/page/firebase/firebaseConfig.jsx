// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const all = import.meta.env;


console.log(6,all)
const firebaseConfig = {
  apiKey: "AIzaSyClylsTXITyLOSZZqgnDIK-QO4GPwit5cU",
  authDomain: "bristo-boss-82ba5.firebaseapp.com",
  projectId: "bristo-boss-82ba5",
  storageBucket: "bristo-boss-82ba5.appspot.com",
  messagingSenderId: "679672754401",
  appId: "1:679672754401:web:1f605e65e6bb25e48447a0",
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth =getAuth(app)
  export default auth;