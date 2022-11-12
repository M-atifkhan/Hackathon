import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { doc, collection, setDoc, Timestamp, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import { db } from "../../lib.js";

let cname = document.querySelector("#cname")
let tname = document.querySelector("#tname")
let bname = document.querySelector("#bname")
let coursename = document.querySelector("#coursename")
let timing = document.querySelector("#timing")

let createClass = document.querySelector("#createClass")
createClass.addEventListener("click", addClass)
function addClass() {
   

    const classRef = collection(db, 'classes');

    addDoc(classRef, {
        cname:cname.value,
        tname:tname.value,
        bname:bname.value,
        timing:timing.value,
        coursename:coursename.value
    
    });
    swal("add class successfully")
    


}
