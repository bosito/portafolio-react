import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjWmf0uINm5qrt9uUM1vwMie9AXzlY0jo",
    authDomain: "fir-firestore-3144d.firebaseapp.com",
    projectId: "fir-firestore-3144d",
    storageBucket: "fir-firestore-3144d.appspot.com",
    messagingSenderId: "332878283528",
    appId: "1:332878283528:web:4d155a7355f588487862bd",
    measurementId: "G-G9B11GH7MJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db