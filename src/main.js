import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: "AIzaSyAcxX5LFG2C1V4QPtbkOTKBl4U-ln2hbjs",
  authDomain: "siteehpad.firebaseapp.com",
  projectId: "siteehpad",
  storageBucket: "siteehpad.appspot.com",
  messagingSenderId: "932950441246",
  appId: "1:932950441246:web:f6b82dc4a70950dc639d0f",
  measurementId: "G-JV3J02YGYE"
};

// Initialize Firebase

initializeApp(firebaseConfig);
const app = createApp(App)
const db = getFirestore();
export default{db};
app.use(router)

app.config.globalProperties.$isAdmin = true;




app.mount('#app')

// ^ exemple pour récupérer des données
// import { collection, getDocs } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });


// ^ ajouter des donnéees
// import { collection, addDoc } from "firebase/firestore";

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
