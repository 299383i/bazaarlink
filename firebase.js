// Firebase Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdBgThwOpqmjdeKTQGn1ORL0zW6OjIzgE",
  authDomain: "bazaarlink-9a602.firebaseapp.com",
  projectId: "bazaarlink-9a602",
  storageBucket: "bazaarlink-9a602.firebasestorage.app",
  messagingSenderId: "990019653029",
  appId: "1:990019653029:web:1cdd0a7678f3ffc31e6c4c",
  measurementId: "G-XPW90XP91F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
