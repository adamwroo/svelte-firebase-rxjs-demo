import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjR4veO89zGv2hQrOiQ9sWIG3mnZfTKQQ",
  authDomain: "svelte-demo-520e0.firebaseapp.com",
  projectId: "svelte-demo-520e0",
  storageBucket: "svelte-demo-520e0.appspot.com",
  messagingSenderId: "687521574102",
  appId: "1:687521574102:web:e184e6d0c87b9f513b2d77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();