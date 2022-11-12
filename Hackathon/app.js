// Import the functions you need from the SDKs you need
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { doc, collection, setDoc, Timestamp, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import {  auth }  from "./lib.js";


//  sign IN

let signin = document.querySelector("#signin");
signin.addEventListener("click", signinFunc);

async function signinFunc() {

    let email = document.querySelector("#your_email");
    let password = document.querySelector("#your_pass");
    // let name = document.querySelector("#name");

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            swal("successfully login")
            location = "panel/panel.html";


            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal("Error!","went something is wrong")

        });

}
