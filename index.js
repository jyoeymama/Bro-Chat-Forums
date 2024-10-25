import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your app's Firebase configuration
const firebaseConfig = {
  databaseURL: "https://bro-chat-forums-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const database = getDatabase(app);