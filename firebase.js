// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2ac5oFteg9DeNMBg7B9JI69mu-v5GtfQ",
  authDomain: "twitter-5e19f.firebaseapp.com",
  projectId: "twitter-5e19f",
  storageBucket: "twitter-5e19f.appspot.com",
  messagingSenderId: "911523746943",
  appId: "1:911523746943:web:043670853c016cfc79db4a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app, db, storage};
