// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDtNdU8WBzRqNWr--l8c7UohwtJ1dRGb_E",
  authDomain: "e-commerce-8ed81.firebaseapp.com",
  projectId: "e-commerce-8ed81",
  storageBucket: "e-commerce-8ed81.appspot.com",
  messagingSenderId: "272756475676",
  appId: "1:272756475676:web:989d331b5f58455843dcd9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

