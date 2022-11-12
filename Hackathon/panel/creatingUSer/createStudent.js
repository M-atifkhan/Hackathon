import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { doc, collection, setDoc, Timestamp, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import { db } from "../../lib.js";

let createStudent = document.querySelector("#createStudent");
createStudent.addEventListener("click", createStudentFunc);

let email = document.querySelector("#email");
let name = document.querySelector("#name");
let rNum = document.querySelector("#rNum");
let className = document.querySelector("#className");
let cnic = document.querySelector("#cnic");



async function createStudentFunc() {

    const studentRef = collection(db, 'Students');

    addDoc(studentRef, {
        email: email.value,
        name: name.value,
        rollNum: rNum.value,
        className: className.value,
        cnic: cnic.value
    });
    swal("successfully student add")
}

// let profilepic = document.querySelector("#profile-pic");
// profilepic.addEventListener("change", storageFunc)

// async function storageFunc() {
//     let file = fileUpload.files[0];
//     let imageRef = ref(storage, `images/${auth.currentUser.uid}`);
//     let uploaded = await uploadBytes(imageRef, file);
//     url = await getDownloadURL(imageRef);
//     console.log(url)
// }

// let profilepic = document.querySelector("#profile-pic");

// profilepic.addEventListener("change", storageFunc);
// async function storageFunc() {
//     let file = fileUpload.files[0];
//     let imageRef = ref(storage, `images/${file.name}`);
//     let uploaded = await uploadBytes(imageRef, file);
//     url = await getDownloadURL(imageRef);
// }

// let fileUpload = document.querySelector("#profile-pic");
// fileUpload.addEventListener("change", uploadpic)
// let profileImg = document.querySelector("#profile-img");

async function uploadpic() {

  let file = fileUpload.files[0];
  let imageRef = ref(storage, `images/${file.name}`);
  let uploaded = await uploadBytes(imageRef, file);
  url = await getDownloadURL(imageRef);
//   profileImg.src = url
}