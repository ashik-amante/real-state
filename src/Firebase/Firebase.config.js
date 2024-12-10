// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO-qPLEvKTQQa5RKDkEkh3p40as8f4CoY",
  authDomain: "real-state-99a11.firebaseapp.com",
  projectId: "real-state-99a11",
  storageBucket: "real-state-99a11.firebasestorage.app",
  messagingSenderId: "182204460315",
  appId: "1:182204460315:web:ca62ab1b8b570d84c877be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth