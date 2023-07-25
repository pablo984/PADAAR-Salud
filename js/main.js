/*Se traen del HTML, mediante la función "queryselector", 
el contenido que coincida con sus respectivas Id's, y se
guardan en constantes.
Es IMPORTANTÍSIMO no olvidar de colocar el "#" seguido del
nombre de la Id: */
const nav = document.querySelector("#nav");
const botonAbrir = document.querySelector("#boton-abrir");
const botonCerrar = document.querySelector("#boton-cerrar");


/*Al hacer click en el botón "Abrir" se ejecutará
la función "mostrarNav": */
botonAbrir.addEventListener("click", mostrarNav);

/*Al hacer click en el botón "Cerrar" se ejecutará
la función "ocultarNav": */
botonCerrar.addEventListener("click", ocultarNav);


//Funciones:

/*Se agrega a la clase "nav" la clase "visible" la cual
hace que se muestre el contenido con los links*/
function mostrarNav(){
    nav.classList.add("visible");
}

/*Se quita a la clase "nav" la clase "visible" la cual
hace que se oculte el contenido con los links*/
function ocultarNav(){
    nav.classList.remove("visible");
}
