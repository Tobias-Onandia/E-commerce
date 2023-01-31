import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwMWTOg291enNHpZD_ibt321dGutwKsSk",
  authDomain: "e-commerce-95e40.firebaseapp.com",
  projectId: "e-commerce-95e40",
  storageBucket: "e-commerce-95e40.appspot.com",
  messagingSenderId: "1092945663647",
  appId: "1:1092945663647:web:ba4aff7b053dbccf0334aa"
};

const app = initializeApp(firebaseConfig);
  
export const db = getFirestore(app)