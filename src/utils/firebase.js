// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhwIRw6T43Ii1W3YC-1mb60A-cnYNPXkE",
  authDomain: "netflixgpt-3e592.firebaseapp.com",
  projectId: "netflixgpt-3e592",
  storageBucket: "netflixgpt-3e592.appspot.com",
  messagingSenderId: "660682562566",
  appId: "1:660682562566:web:7a98234f7e48b85c0f7787",
  measurementId: "G-VJ7JMR3YNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =  getAuth();