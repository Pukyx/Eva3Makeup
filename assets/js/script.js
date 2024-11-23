import { agregarPersona } from "./promesas.js";
window.addEventListener("load",()=>{
    console.log("hola ya cargue");
    document.getElementById("btnAgregar").addEventListener("click",()=>{
        console.log("Le diste al boton");
        //Recupero los elementos del formulario
        let eNombre = document.getElementById("nombre");
        let eApellido = document.getElementById("apellido");
        let eCorreo = document.getElementById("correo");
        let eFecha = document.getElementById("fecha");
        let eGenero = document.getElementById("genero");
        let eFavorito = document.getElementById("favorito");
        let eOpinion = document.getElementById("opinion");
        let eTerminos = document.getElementById("terminos");
        //Recupero el contenido de los elementos del formulario
        let vNombre = eNombre.value;
        let vApellido = eApellido.value;
        let vCorreo = eCorreo.value;
        let vFecha = eFecha.value;
        let vGenero = eGenero.value;
        let vFavorito = eFavorito.value;
        let vOpinion = eOpinion.value;
        let vTerminos = eTerminos.checked; //Radios y checkbox no se recupera valor, se recupera si esta chequeado

        console.log(vNombre);
        console.log(vApellido);
        console.log(vCorreo);
        console.log(vFecha);
        console.log(vGenero);
        console.log(vFavorito);
        console.log(vOpinion);
        console.log(vTerminos);
        let persona = {
            'nombre':vNombre,
            'apellido':vApellido,
            'correo':vCorreo,
            'fecha':vFecha,
            'genero':vGenero,
            'favorito':vFavorito,
            'opinion':vOpinion,
            'terminos':vTerminos
        };
        agregarPersona(persona);
        console.log(persona);
    })
})