export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgRJ6mWVcFBdMuiMkYuU7s0p0aDq4uPp8",
  authDomain: "discogs-app-dffb9.firebaseapp.com",
  databaseURL: "https://discogs-app-dffb9-default-rtdb.firebaseio.com",
  projectId: "discogs-app-dffb9",
  storageBucket: "discogs-app-dffb9.appspot.com",
  messagingSenderId: "104439111251",
  appId: "1:104439111251:web:c31232cf59e48dd48370a6",
  measurementId: "G-J8RVMNP032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);