// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
// Your web app's Firebase configuration

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);