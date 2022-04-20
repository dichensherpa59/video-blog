
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCb2474Zaue2NdHBgM86AtKh7blXeirQic",
  authDomain: "videoblog-9b00f.firebaseapp.com",
  databaseURL: "https://videoblog-9b00f-default-rtdb.firebaseio.com",
  projectId: "videoblog-9b00f",
  storageBucket: "videoblog-9b00f.appspot.com",
  messagingSenderId: "415368818804",
  appId: "1:415368818804:web:8a404a2bc6cccd8d072121",
  measurementId: "G-8LHRZF2E2X"
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);