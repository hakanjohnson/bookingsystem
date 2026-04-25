
  //SETUP*********

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDXJUifQRtWZAFqg5Z_RLp-RmIuKp_jQpU",
    authDomain: "buchungssystem-75196.firebaseapp.com",
    projectId: "buchungssystem-75196",
    storageBucket: "buchungssystem-75196.firebasestorage.app",
    messagingSenderId: "903591657810",
    appId: "1:903591657810:web:b7c1397ae91c6e517b7a8b",
    measurementId: "G-7XNM9T62CX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  //LOGIC*********

  window.book = async function () {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const name = document.getElementById("name").value;

    if (!date || !time || !name) {
        alert("Bitte alle Felder ausfüllen");
        return;
    }

    try {
        await addDoc(collection(db, "termine"), {
            date: date,
            time: time,
            name: name,
            createAt: new Date()
        });
        alert("Termin wurde erfolgreich gebucht");
    }
    catch (error) {
        console.error("Fehler:", error.code, error.message);
        alert(error.message);
    }
  };


