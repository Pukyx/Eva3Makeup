//importación de las credenciales
import { firebaseConfig } from "./credenciales.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
//importación para obtener datos de firestore, lo mismo de arriba pero con un cambio en la parte final 
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
