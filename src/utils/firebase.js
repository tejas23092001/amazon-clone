import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmCqn7Zz-c6R45BXU3eezkZYoQspzyJII",
  authDomain: "clone-7be70.firebaseapp.com",
  projectId: "clone-7be70",
  storageBucket: "clone-7be70.appspot.com",
  messagingSenderId: "852844252051",
  appId: "1:852844252051:web:65db3f99032643ad70f666",
  measurementId: "G-WP2GJDDQGM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {db, auth}