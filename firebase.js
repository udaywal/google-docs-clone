import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyANM7PAw3hWB_UKarH7blQa4LsIIt-ucQc",
  authDomain: "docs-clone-a3bf2.firebaseapp.com",
  projectId: "docs-clone-a3bf2",
  storageBucket: "docs-clone-a3bf2.appspot.com",
  messagingSenderId: "909211569836",
  appId: "1:909211569836:web:d01a7be2ebf1a5accd9909"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const db = app.firestore();
