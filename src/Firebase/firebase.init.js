// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwYmU1uPubvCZhcvQB3pivq1WOUlB17gU",
  authDomain: "recipe-project-firebase.firebaseapp.com",
  projectId: "recipe-project-firebase",
  storageBucket: "recipe-project-firebase.firebasestorage.app",
  messagingSenderId: "765244906281",
  appId: "1:765244906281:web:36f381b808b84ddfa97538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);