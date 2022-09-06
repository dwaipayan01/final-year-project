// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARjI4d_wm3NKqGTYmImAMLPUwkcPofW6I",
  authDomain: "final-year-project-817fc.firebaseapp.com",
  projectId: "final-year-project-817fc",
  storageBucket: "final-year-project-817fc.appspot.com",
  messagingSenderId: "364085257534",
  appId: "1:364085257534:web:e1b43a0eaa57f781deb86f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;