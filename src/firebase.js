// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDUxIdWPAM500pKMUVB2HjV8NzyG_WOf0Q",
    authDomain: "clone-f7599.firebaseapp.com",
    databaseURL: "https://clone-f7599.firebaseio.com",
    projectId: "clone-f7599",
    storageBucket: "clone-f7599.appspot.com",
    messagingSenderId: "948649114175",
    appId: "1:948649114175:web:66de5c4cf5959adc66168a",
    measurementId: "G-ZGV3Z5QT4G"
  };


  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db=firebaseapp.firestore(); //set up database firestore- real time db
  const auth = firebase.auth();
  
  
  export {db,auth};