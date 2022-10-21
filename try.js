// let btn= document.querySelector("#btn");
//     let sidebar= document.querySelector(".sidebar");

//     btn.onclick= function(){
//       sidebar.classList.toggle("active");
//     }

//     //sliding
//     let slideIndex = 1;
//     showSlides(slideIndex);

//     function plusSlides(n) {
//       showSlides(slideIndex += n);
//     }

//     function currentSlide(n) {
//       showSlides(slideIndex = n);
//     }

//     function showSlides(n) {
//       let i;
//       let slides = document.getElementsByClassName("mySlides");
//       let dots = document.getElementsByClassName("dot");
//       if (n > slides.length) {slideIndex = 1}
//       if (n < 1) {slideIndex = slides.length}
//       for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }
//       for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//       slides[slideIndex-1].style.display = "block";
//       dots[slideIndex-1].className += " active";
//     }
//     // Import the functions you need from the SDKs you need
//     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
//     import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
//     //import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase/auth.js";
//     // TODO: Add SDKs for Firebase products that you want to use
//     // https://firebase.google.com/docs/web/setup#available-libraries

//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//       apiKey: "AIzaSyBfq-ptJkg7y-hJpyJrVq8x0PNoM4fT7cY",
//       authDomain: "shuttle-go-8d87a.firebaseapp.com",
//       databaseURL: "https://shuttle-go-8d87a-default-rtdb.firebaseio.com",
//       projectId: "shuttle-go-8d87a",
//       storageBucket: "shuttle-go-8d87a.appspot.com",
//       messagingSenderId: "509853219067",
//       appId: "1:509853219067:web:5e6b7fb55bbdba9cc0985e",
//       measurementId: "G-3YGP2PY9QX"
//     };

//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const database = getDatabase(app);
//     const userId = "Users"; //tree name sa firebase
//     let inputs = document.querySelectorAll('input');
//     var id = 0;

//     //adding the user
//     addAccountbtn.addEventListener('click',(e) => {
//     var firstName = document.getElementById('Fname').value;
//     var midName = document.getElementById('Mname').value; 
//     var lastName = document.getElementById('Lname').value;
//     var address = document.getElementById('address').value; 
//     var license = document.getElementById('license').value; 
//     var email = document.getElementById('Email').value;
//     var profile = document.getElementById('myfile').value; 
//     var registration = document.getElementById('regdate').value;
//     var status = document.getElementById('status').value; 
  
//     set(ref(database, 'users/' + userId), {

//     id: ++id, //not incrementing
//     firstName: firstName,
//     midName: midName,
//     lastName: lastName,
//     address : address,
//     license : license,
//     email : email,
//     profile : profile,
//     registration : registration,
//     status : status
//   });
//   alert('Saved');
//   inputs.forEach(input =>  input.value = '');
//   });

//viewing acct
window.addEventListener('load', () =>{
  //function AddItemz() {
  //var std= "keme";
    // let namey = document.querySelector(".name").parentNode.nodeName;
    // namey.innerHTML = name;
    // namey.append(name);
    //document.querySelector("#viewAcct").innerHTML = std;
    // var view = document.querySelector("#viewAcct");
    // view.addEventListener('click', (e) => {
    // });
    //std
    alert("id: " + std)
//}
})
//     function AddAllItemsz(users) {
//     users.forEach(element => {
//     var name =element.firstName + " " + element.lastName;
//     AddItemz(name)
//   });
// }
// AddItemz()