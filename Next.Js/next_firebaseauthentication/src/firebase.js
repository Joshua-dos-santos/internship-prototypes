// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi6j0HVm6_Wmb82BT9JIArobTrIonO7Uk",
  authDomain: "next-firebaseauth-e8132.firebaseapp.com",
  projectId: "next-firebaseauth-e8132",
  storageBucket: "next-firebaseauth-e8132.appspot.com",
  messagingSenderId: "823967718140",
  appId: "1:823967718140:web:640232cb8aed1a157d1579",
  measurementId: "G-FFRRVJLPN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;