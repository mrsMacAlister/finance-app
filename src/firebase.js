import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FINANCE_FIREBASE_KEY,
  authDomain: "finance-app-23868.firebaseapp.com",
  projectId: "finance-app-23868",
  storageBucket: "finance-app-23868.appspot.com",
  messagingSenderId: "289014891677",
  appId: "1:289014891677:web:5d50a7b86f913d14540074",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
