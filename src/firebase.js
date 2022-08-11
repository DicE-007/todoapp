import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAW42h4N4XX9vm06B_p2jmceMPZBJNycy0",
  authDomain: "todoapp-b5feb.firebaseapp.com",
  projectId: "todoapp-b5feb",
  storageBucket: "todoapp-b5feb.appspot.com",
  messagingSenderId: "515793848620",
  appId: "1:515793848620:web:0e64f6686665c4a0948489"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
