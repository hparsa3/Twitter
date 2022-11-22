// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,

  authDomain: "twitterv1-9e2f3.firebaseapp.com",

  projectId: "twitterv1-9e2f3",

  storageBucket: "twitterv1-9e2f3.appspot.com",

  messagingSenderId: "386622443293",

  appId: "1:386622443293:web:05d5850487d161b8fd9bf4"

};



// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();

export {app, db, storage};