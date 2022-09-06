// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtEz_lGGEHSaUdKVCG7oTpz4Ws3TR4VcA",
  authDomain: "final-year-project-556ac.firebaseapp.com",
  projectId: "final-year-project-556ac",
  storageBucket: "final-year-project-556ac.appspot.com",
  messagingSenderId: "442275376402",
  appId: "1:442275376402:web:f2e38cffa83eac968257cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;