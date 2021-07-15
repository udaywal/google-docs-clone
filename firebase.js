import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDnkOUVZGt2KeHSTn0pIf3pxqHczjNjrx8",
  authDomain: "docs-clone-539b0.firebaseapp.com",
  projectId: "docs-clone-539b0",
  storageBucket: "docs-clone-539b0.appspot.com",
  messagingSenderId: "108180810113",
  appId: "1:108180810113:web:fffe145011b60a4632e080"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const db = app.firestore();
