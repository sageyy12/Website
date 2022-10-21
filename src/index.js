// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"; //firebase/app
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js"; //firebase/analytics
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfq-ptJkg7y-hJpyJrVq8x0PNoM4fT7cY",
  authDomain: "shuttle-go-8d87a.firebaseapp.com",
  databaseURL: "https://shuttle-go-8d87a-default-rtdb.firebaseio.com",
  projectId: "shuttle-go-8d87a",
  storageBucket: "shuttle-go-8d87a.appspot.com",
  messagingSenderId: "509853219067",
  appId: "1:509853219067:web:5e6b7fb55bbdba9cc0985e",
  measurementId: "G-3YGP2PY9QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseConfig);

//Detech auth state
//onAuthStateChanged(auth, (user) => {
  //  if (user != null) {
  //    console.log("User is signed in");
  //  }else{
//      console.log("User is not signed in");
//}
//});
