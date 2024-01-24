// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZTXcv_lft-CBfYT-ncQthYW3MzGkGD7k",
  authDomain: "nextj-auth-project.firebaseapp.com",
  projectId: "nextj-auth-project",
  storageBucket: "nextj-auth-project.appspot.com",
  messagingSenderId: "786040130149",
  appId: "1:786040130149:web:f805d61b8d4c299511d48c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const imageDb = getStorage(app);
