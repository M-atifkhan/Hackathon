  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  import { getFirestore  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDK4ZSmNRIj17GNxk3isSHylkfA9tKFIMQ",
    authDomain: "attendence-app-86adb.firebaseapp.com",
    projectId: "attendence-app-86adb",
    storageBucket: "attendence-app-86adb.appspot.com",
    messagingSenderId: "70987279051",
    appId: "1:70987279051:web:661b5dbf3c5cedd163894e",
    measurementId: "G-EZTT1YXP9R"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth(app);
  export const db = getFirestore(app);