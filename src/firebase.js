import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDyNthziZtQBd807BHE3TO7Ek8Q4ngTLHo",
    authDomain: "apex-website-0201.firebaseapp.com",
    projectId: "apex-website-0201",
    storageBucket: "apex-website-0201.appspot.com",
    messagingSenderId: "758582364782",
    appId: "1:758582364782:web:60b46169d06ac63198f47f",
    measurementId: "G-DEYN7777JC"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();