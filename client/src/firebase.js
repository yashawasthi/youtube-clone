import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGF6coAtK58zea7GQdtNm-0gNEhKW6Ml0",
  authDomain: "clone-4154b.firebaseapp.com",
  projectId: "clone-4154b",
  storageBucket: "clone-4154b.appspot.com",
  messagingSenderId: "1023124793209",
  appId: "1:1023124793209:web:855af781253eade5d931a8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
