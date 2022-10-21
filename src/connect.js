// import { ids } from "webpack";

// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getDatabase, ref, child, get } from "firebase/database";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBfq-ptJkg7y-hJpyJrVq8x0PNoM4fT7cY",
//   authDomain: "shuttle-go-8d87a.firebaseapp.com",
//   databaseURL: "https://shuttle-go-8d87a-default-rtdb.firebaseio.com",
//   projectId: "shuttle-go-8d87a",
//   storageBucket: "shuttle-go-8d87a.appspot.com",
//   messagingSenderId: "509853219067",
//   appId: "1:509853219067:web:5e6b7fb55bbdba9cc0985e",
//   measurementId: "G-3YGP2PY9QX"
// };

// const uname= document.getElementById("Uname");
// const ps= document.getElementById("pass");

// //btn
// const submitbtn= document.getElementById("loginbtn");

// function writeUserData(userId, name, email) {
//   const db = ref(getDatabase());
//   set(ref(db, 'users/' + userId), {
//     username: "rdhen ",
//     email: "rasd",
//   });
// }

// const dbRef = ref(getDatabase());
// get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

//db

// submitbtn.addEventListener(click, (e) =>{
//     e.preventDefault();
//     database.ref('/super_admin' + uname. value).set({
//         username: uname.value,
//         ps: pass.value
//     });
// });

// import { getDatabase, ref, set } from "firebase/database";

// function writeUserData(userId, name, email) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email
//   });
// }