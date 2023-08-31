import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi6p2W_n6m2zmQrZ4X5entdTpfi5mU7bA",
    authDomain: "twitter-clone-861df.firebaseapp.com",
    projectId: "twitter-clone-861df",
    storageBucket: "twitter-clone-861df.appspot.com",
    messagingSenderId: "135512652142",
    appId: "1:135512652142:web:11285f568dc094bbd6697f",
    measurementId: "G-G0BCV8YZE4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };