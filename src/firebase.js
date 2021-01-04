import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD7xilAxUfQDMUBS4OKCG0QQJ4uxmCYdVw",
  authDomain: "clone-bf98c.firebaseapp.com",
  projectId: "clone-bf98c",
  storageBucket: "clone-bf98c.appspot.com",
  messagingSenderId: "377607782607",
  appId: "1:377607782607:web:e27159f0f13f68bcdaf7ba",
  measurementId: "G-2Z0DCHJEYS",
});

const auth = firebase.auth();

export { auth };
