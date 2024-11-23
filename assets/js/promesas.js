//se importa la base de datos y las funciones de firebase
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"; 
import { db } from "./firebase.js";

//se crea una funcion flecha para registrar una persona en la base de datos, de manera que es exportable
export let registrarPersona = async(persona) => {
    //console.log("persona");
    //console.log(persona);
    const docRef = await addDoc(collection(db, "persona"), persona);
}

export let obtenerPersonas = async() => {
    const querySnapshot = await getDocs(collection(db, "persona"));
    var personas = []
    querySnapshot.forEach((doc) => {
        let persona = {
            'id': doc.id,
            'nombre': doc.data().nombre,
            'apellido': doc.data().apellido,
            'correo': doc.data().correo,
            'fecha': doc.data().fecha,
            'genero': doc.data().genero,
            'favorito': doc.data().favorito,
            'opinion': doc.data().opinion,
            'terminos': doc.data().terminos
        }
        personas.push(persona)
        console.log(doc.id," => ", doc.data());
    });
        return personas;
}

export let eliminarPersona = async(idPersona) => {
    await deleteDoc(doc(db, "persona", idPersona));
}

export let obtenerPersona = async(idPersona) => {
    const docRef = doc(db, "persona", idPersona);
    const docSnap = await getDocs(docRef);
    let persona ={
        'id': docSnap.id,
        'nombre': docSnap.data().nombre,
        'apellido': docSnap.data().apellido,
        'correo': docSnap.data().correo,
        'fecha': docSnap.data().fecha,
        'genero': docSnap.data().genero,
        'favorito': docSnap.data().favorito,
        'opinion': docSnap.data().opinion,
        'terminos': docSnap.data().terminos
    }
    return persona;
}
 export let actualizarPersona = async(id, p) => {
    const docRef = await doc(db, "persona", id);
    console.log("En promesas")
    console.log(p);
    updateDoc(docRef, {...p});
}