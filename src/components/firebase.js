import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSaqZ6olvz74Fb8GIuVMmD8nkNyW3WnSw",
    authDomain: "findmystuff-623b4.firebaseapp.com",
    databaseURL: "https://findmystuff-623b4.firebaseio.com",
    projectId: "findmystuff-623b4",
    storageBucket: "findmystuff-623b4.appspot.com",
    messagingSenderId: "931164075456",
    appId: "1:931164075456:web:b3ffeb330297a699354425",
    measurementId: "G-FPP1W23BKR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;

window.firebase = firebase;

export const firestore = firebase.firestore();
