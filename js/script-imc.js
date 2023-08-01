
const botonHombre = document.querySelector(".boton-hombre");
const botonMujer = document.querySelector(".boton-mujer");


/*Eventos al hacer click: */
botonHombre.addEventListener("click", cambiarColorHombre);
botonMujer.addEventListener("click", cambiarColorMujer);


//FUNCIONES: 

/*Al hacer click en uno de los botones, éste cambiará al
color de su género, y el otro botón, si es que ya tiene el
color de su género, cambiara a gris.*/

function cambiarColorHombre(){
    botonHombre.style.backgroundColor="#0DCAF0"; //Celeste
    botonMujer.style.backgroundColor="#6C757D"; //Gris
}

function cambiarColorMujer(){
    botonMujer.style.backgroundColor="rgb(255, 59, 92)"; //Rosa
    botonHombre.style.backgroundColor="#6C757D"; //Gris
}