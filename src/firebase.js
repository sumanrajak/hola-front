import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBMYzSfiNKseuaoYeIE6ZO1LawfJa687nI",
    authDomain: "hola-21edb.firebaseapp.com",
    databaseURL: "https://hola-21edb.firebaseio.com",
    projectId: "hola-21edb",
    storageBucket: "hola-21edb.appspot.com",
    messagingSenderId: "663043559041",
    appId: "1:663043559041:web:8bc3a9f2064d7fd58e4780",
    measurementId: "G-0W3CBPLJRM"
  };

  const firebaseapp =firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
   export  {auth,provider};