// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyDtlFf-PyXC3l1W8db2_Jlp6qf73ziw0ow",
  authDomain: "vue-firebaseauth-ce03b.firebaseapp.com",
  projectId: "vue-firebaseauth-ce03b",
  storageBucket: "vue-firebaseauth-ce03b.appspot.com",
  messagingSenderId: "249957943949",
  appId: "1:249957943949:web:7834246923169d82dcf0c4",
  measurementId: "G-0LGGH1F8P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()


export { app, auth }