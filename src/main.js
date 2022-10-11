import App from './App.svelte'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1haVfEktJea3owcXcFZi5niaCPO1QZlI",
  authDomain: "tasmankingsleydesign.firebaseapp.com",
  projectId: "tasmankingsleydesign",
  storageBucket: "tasmankingsleydesign.appspot.com",
  messagingSenderId: "313544814465",
  appId: "1:313544814465:web:b017bdcebf7278f91f8280",
  measurementId: "G-TX5WECK3ZT"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);


const app = new App({
  target: document.getElementById('app')
})

export default app
