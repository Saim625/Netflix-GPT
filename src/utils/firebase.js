// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD33GGgJ1Fd99hOKJAMg93uOTM6W2pNJuk",
  authDomain: "netflixgpt-9ac84.firebaseapp.com",
  projectId: "netflixgpt-9ac84",
  storageBucket: "netflixgpt-9ac84.appspot.com",
  messagingSenderId: "907598805647",
  appId: "1:907598805647:web:b1f823509f5667b58c4efa",
  measurementId: "G-JJ9EPDCPGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();