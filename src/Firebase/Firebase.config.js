// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-4UediDUB5kqfKoPFrICH8uKQLAf6aLk",
  authDomain: "erudite-courses-site.firebaseapp.com",
  projectId: "erudite-courses-site",
  storageBucket: "erudite-courses-site.appspot.com",
  messagingSenderId: "597104988799",
  appId: "1:597104988799:web:8cacd2e9f77dea7a93254a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;