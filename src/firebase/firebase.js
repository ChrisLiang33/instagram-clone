// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDj6Yx9oMuuHGbvfrKLaxDzBBBzIQX9K3k",
  authDomain: "instagram-clone-99596.firebaseapp.com",
  projectId: "instagram-clone-99596",
  storageBucket: "instagram-clone-99596.appspot.com",
  messagingSenderId: "429316744572",
  appId: "1:429316744572:web:bd5e81855237fa1f7fb0f9",
  measurementId: "G-TTLDN007EJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
