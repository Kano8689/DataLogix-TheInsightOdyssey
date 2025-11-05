// Replace with your actual Firebase config
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//     databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_PROJECT_ID.appspot.com",
//     messagingSenderId: "YOUR_SENDER_ID",
//     appId: "YOUR_APP_ID"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjsJSC5tOgqy0F1RsmThJZobFPy1vcUkU",
  authDomain: "datalogix-theinsightodyssey.firebaseapp.com",
  projectId: "datalogix-theinsightodyssey",
  storageBucket: "datalogix-theinsightodyssey.firebasestorage.app",
  messagingSenderId: "515212831661",
  appId: "1:515212831661:web:6aaa8e84ef5956a1a70f24",
  measurementId: "G-S92B9ZFC94"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
    // Collect form data
    const data = {
        department: form.department.value,
        program: form.program.value,
        team: form.team.value,
        member1: form.member1.value,
        member2: form.member2.value,
        mobile1: form.mobile1.value,
        mobile2: form.mobile2.value,
        analytical_tools: form.analytical_tools.value,
        data_preprocessing: form.data_preprocessing.value,
        ml_proficiency: form.ml_proficiency.value,
        other_tools: form.other_tools.value
    };
    // Save to Firebase database
    database.ref('registrations').push(data)
    .then(() => {
        alert('Registration successful!');
        form.reset();
    })
    .catch((error) => {
        alert('Error: ' + error.message);
    });
});





/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjsJSC5tOgqy0F1RsmThJZobFPy1vcUkU",
  authDomain: "datalogix-theinsightodyssey.firebaseapp.com",
  projectId: "datalogix-theinsightodyssey",
  storageBucket: "datalogix-theinsightodyssey.firebasestorage.app",
  messagingSenderId: "515212831661",
  appId: "1:515212831661:web:6aaa8e84ef5956a1a70f24",
  measurementId: "G-S92B9ZFC94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/

/*

npm install firebase

npm install -g firebase-tools

firebase login
firebase init
firebase deploy

*/
