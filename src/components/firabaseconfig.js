
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5ru9yV6QLzidJXt4NojSFqJUH_H-d79U",
  authDomain: "tax-project-7798a.firebaseapp.com",
  projectId: "tax-project-7798a",
  storageBucket: "tax-project-7798a.appspot.com",
  messagingSenderId: "122423976773",
  appId: "1:122423976773:web:3f44f0730f891afaf5942c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);