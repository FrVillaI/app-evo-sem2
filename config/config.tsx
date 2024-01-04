import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDMSm7jpUFNb06EQumW7MaXDqyquxWXKeY",
  authDomain: "app-movi2-sem.firebaseapp.com",
  databaseURL: "https://app-movi2-sem-default-rtdb.firebaseio.com",
  projectId: "app-movi2-sem",
  storageBucket: "app-movi2-sem.appspot.com",
  messagingSenderId: "205101659334",
  appId: "1:205101659334:web:9f6555febcc3f62cc853c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =  getDatabase(app)