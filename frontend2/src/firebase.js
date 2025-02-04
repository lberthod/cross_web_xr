// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCWnzPp6ZZoa4cef1ux7pB0IXTnTEM0xCs",
    authDomain: "dinane-fae32.firebaseapp.com",
    databaseURL: "https://dinane-fae32-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dinane-fae32",
    storageBucket: "dinane-fae32.firebasestorage.app",
    messagingSenderId: "67005604569",
    appId: "1:67005604569:web:39ed8dcb0ec310006d54c8",
    measurementId: "G-RFENDTH9KK"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
