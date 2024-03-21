import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // Import auth module
import { getFirestore } from 'firebase/firestore'; // Import firestore module
import router from './routes/index'
import store from './store.js';

const firebaseConfig = {
  apiKey: "AIzaSyDtlFf-PyXC3l1W8db2_Jlp6qf73ziw0ow",
  authDomain: "vue-firebaseauth-ce03b.firebaseapp.com",
  projectId: "vue-firebaseauth-ce03b",
  storageBucket: "vue-firebaseauth-ce03b.appspot.com",
  messagingSenderId: "249957943949",
  appId: "1:249957943949:web:7834246923169d82dcf0c4",
  measurementId: "G-0LGGH1F8P0"
};

const firebaseApp = initializeApp(firebaseConfig); // Initialize Firebase app

const auth = getAuth(firebaseApp); // Initialize Firebase Auth service
const firestore = getFirestore(firebaseApp); // Initialize Firestore service

createApp(App).use(store).use(router).use(auth).use(firestore).mount('#app'); // Mount the Vue application