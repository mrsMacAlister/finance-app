import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FINANCE_FIREBASE_KEY,
  authDomain: "finance-app-23868.firebaseapp.com",
  projectId: "finance-app-23868",
  storageBucket: "finance-app-23868.appspot.com",
  messagingSenderId: "289014891677",
  appId: "1:289014891677:web:5d50a7b86f913d14540074",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();
/*export const userID = onAuthStateChanged(auth, (user) => {
  if (user) {
    this.user = user.uid;
  }
});*/

//export const userid = auth.currentUser.uid;
//export const userid = getAuth().getUser(uid);
