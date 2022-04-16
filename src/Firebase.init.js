// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi8thh3sMDygSxe1HvKhmErlK4b18lCn8",
  authDomain: "health-check-df55d.firebaseapp.com",
  projectId: "health-check-df55d",
  storageBucket: "health-check-df55d.appspot.com",
  messagingSenderId: "391202676394",
  appId: "1:391202676394:web:e71778acd37e0320247ad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;