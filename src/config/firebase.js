// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDsNtWM4nEaRszpaIK-QnQm6ay9kF_OEXw",
  authDomain: "proyecto4restaurant.firebaseapp.com",
  projectId: "proyecto4restaurant",
  storageBucket: "proyecto4restaurant.appspot.com",
  messagingSenderId: "579994393424",
  appId: "1:579994393424:web:faf61bcd6e1aeb99eb6a55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//* especificamos los servicios que queremos ocupar

export const db = getFirestore(app); //? FIRESTORE DATABASE
