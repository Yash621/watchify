import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFSAdgjeJPcXdXTWO66417AmecC20P2Ug",
  authDomain: "watchify-86876.firebaseapp.com",
  projectId: "watchify-86876",
  storageBucket: "watchify-86876.appspot.com",
  messagingSenderId: "337807373671",
  appId: "1:337807373671:web:ea22c019430f1396baebc2",
  measurementId: "G-6XMLGWE17F",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
