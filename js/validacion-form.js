//Variables que almacenan la selección del usuario:
const cajaNombre = document.getElementById("idNombre");
const cajaApellido = document.getElementById("idApellido");
const cajaCorreo = document.getElementById("idCorreo");
const cajaComentario = document.getElementById("idComentario");
const botonEnviar = document.querySelector(".boton");

//Variables que almacenan la info del usuario:
let nombre;
let apellido;
let correo;
let comentario;

//Evento al hacer click:
botonEnviar.addEventListener("click", chequear);

//FUNCIONES:
function chequear(){
    cargarDatos();
    revisarDatos();
}

function cargarDatos(){
    nombre = cajaNombre.value;
    apellido = cajaApellido.value;
    correo = cajaCorreo.value;
    comentario = cajaComentario.value;
}

function revisarDatos(){
    if(nombre == ""){
        alert("Tenés que ingresar tu nombre");
        cajaNombre.focus();
    }
    else if(apellido == ""){
        alert("Tenés que ingresar tu apellido");
        cajaApellido.focus();
    }
    else if(correo == ""){
        alert("Tenés que ingresar tu correo electrónico");
        cajaCorreo.focus();
    }
    else if(comentario == ""){
        alert("Tenés que escribir un comentario y/o sugerencia");
        cajaComentario.focus();
    }
}


