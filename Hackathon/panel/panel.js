// Import the functions you need from the SDKs you need
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { doc, collection, setDoc, Timestamp, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import { auth, db } from "../lib.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // adminINfoFunc()
        // studenListCreate()
        // ...
    } else {
        // User is signed out
        // ...
    }
});
let adminImage = document.querySelector("#adminImage")
async function adminINfoFunc() {
    const querySnapshot = await getDocs(collection(db, "adminInfo"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        adminImage.src = doc.data().imageLink
    });
}

adminINfoFunc()

function radioValue(parameter) {
    console.log(parameter.value);

}

// let currentValue = "beginner";
// // let createStudent = document.querySelector("#CreateStudent")
// // createStudent.addEventListener("click","handleC)
// function handleClick(myRadio) {
//     currentValue = myRadio;
//     console.log(currentValue)
// }
// let buttonsvalue =
//     $('[type="checkbox"]').click(function (e) {
//         console.log(e)
//     });

function displayRadioValue() {
    var ele = document.getElementsByName('gender');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            console.log(ele[i].value, "?sss");
        // document.getElementById("result").innerHTML
        //     = "Gender: " + ele[i].value;
    }
}

function buttonsvalue(params) {
    console.log(params, "ssss");
    // if(params === present)
}


let cardContainer = document.querySelector("#studentList")
let x = 0;
async function gettingPosts() {
    const q = query(collection(db, "Students"));

    const querySnapshot = await getDocs(q);
    // cardContainer.innerHTML = ""
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        //         let radio = `<input type="radio" name="gender" value="Male">Male
        //      <input type="radio" name="gender" value="Female">Female
        //      <input type="radio" name="gender" value="Others">Others
        //      <button type="button" onclick="displayRadioValue()">
        //      Submit
        //  </button>
        //      `
        // let button = document.createElement("button")
        // let radio = document.createElement('label');
        // let radio1 = document.createElement('label');
        // let radio2 = document.createElement('label');

        // radio.innerHTML = "Present"
        // radio.innerHTML = "absent"
        // radio.innerHTML = "leave"

        let radio = `<form >
        <label  ><input type='radio' name='attendance' value='present' id='present'  selected>Present<label/>
        <br/><label><input type='radio' name='attendance' value='absent'> Absent<label/>
        <br/><label><input type='radio' name='attendance' value='leave' >leave<label/>
        </form>
        `

        td.innerHTML = doc.data().rollNum;
        td1.innerHTML = x;
        td2.innerHTML = doc.data().name;
        td3.innerHTML = doc.data().cnic;
        td4.innerHTML = radio;
        // button.appendChild(radio)
        // button.appendChild(radio1)
        // button.appendChild(radio2)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td)
        tr.appendChild(td3);
        tr.appendChild(td4)


        cardContainer.appendChild(tr)
    });
    x = x + 1
}


// let dropdown = document.getElementById("present")
// dropdown.addEventListener("click",buttonsvalue)
// var value = dropdown.value;
// var text = dropdown.options[e.selectedIndex].text;

let searchBrandIcon = document.querySelector("#searchBrandIcon");
let searchBrand = document.querySelector("#searchBrand");
searchBrandIcon.addEventListener("click", searchFunc);
async function searchFunc() {

    const q = query(collection(db, "Students"), where("cnic", "==", searchBrand.value));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        cardContainer.innerHTML = ""
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        //         let radio = `<input type="radio" name="gender" value="Male">Male
        //      <input type="radio" name="gender" value="Female">Female
        //      <input type="radio" name="gender" value="Others">Others
        //      <button type="button" onclick="displayRadioValue()">
        //      Submit
        //  </button>
        //      `
        // let button = document.createElement("button")
        // let radio = document.createElement('label');
        // let radio1 = document.createElement('label');
        // let radio2 = document.createElement('label');

        // radio.innerHTML = "Present"
        // radio.innerHTML = "absent"
        // radio.innerHTML = "leave"

        let radio = `<form >
        <label  ><input type='radio' name='attendance' value='present' id='present'  selected>Present<label/>
        <br/><label><input type='radio' name='attendance' value='absent'> Absent<label/>
        <br/><label><input type='radio' name='attendance' value='leave' >leave<label/>
        </form>
        `

        td.innerHTML = doc.data().rollNum;
        td1.innerHTML = x;
        td2.innerHTML = doc.data().name;
        td3.innerHTML = doc.data().cnic;
        td4.innerHTML = radio;
        // button.appendChild(radio)
        // button.appendChild(radio1)
        // button.appendChild(radio2)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td)
        tr.appendChild(td3);
        tr.appendChild(td4)


        cardContainer.appendChild(tr)
        console.log(doc.data());

        if (searchBrand.value === "") {
            cardContainer.innerHTML = ""
            gettingPosts()
        }
    });
    // console.log("hello",searchBrand.value);
}


gettingPosts()