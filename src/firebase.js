// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCHq73F258bSOcwXy5_AhSNgF5zJiy43E",
  authDomain: "otp-verify-3e43c.firebaseapp.com",
  projectId: "otp-verify-3e43c",
  storageBucket: "otp-verify-3e43c.appspot.com",
  messagingSenderId: "1085310507705",
  appId: "1:1085310507705:web:aa3685ea5201a75bd4d968",
  measurementId: "G-WRB54C4CFC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app};