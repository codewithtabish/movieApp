// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf5i_nXdY3HBpO2cOxEHhPdR1eEQ0CdFs",
  authDomain: "movieapp-55e9d.firebaseapp.com",
  projectId: "movieapp-55e9d",
  storageBucket: "movieapp-55e9d.appspot.com",
  messagingSenderId: "714660296162",
  appId: "1:714660296162:web:e6064311b9c7c3fd7af5bb",
  measurementId: "G-JCQGXZNT2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const analytics = getAnalytics(app);
export {auth}