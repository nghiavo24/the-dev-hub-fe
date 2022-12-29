// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY_API,
  authDomain: "the-dev-hub-b31e2.firebaseapp.com",
  projectId: "the-dev-hub-b31e2",
  storageBucket: "the-dev-hub-b31e2.appspot.com",
  messagingSenderId: "958411825379",
  appId: "1:958411825379:web:49b50cb239e90cbeec25d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

