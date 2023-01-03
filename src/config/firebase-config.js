import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "the-dev-hub-2d8bd.firebaseapp.com",
  projectId: "the-dev-hub-2d8bd",
  storageBucket: "the-dev-hub-2d8bd.appspot.com",
  messagingSenderId: "718315114680",
  appId: "1:718315114680:web:d0032ec6565b945f2f644d"
};

const app = initializeApp(firebaseConfig);