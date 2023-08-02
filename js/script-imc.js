//Variables que almacenan la selección del usuario:
const botonHombre = document.querySelector(".boton-hombre");
const botonMujer = document.querySelector(".boton-mujer");
const cajaEdad = document.querySelector(".caja-edad");
const cajaAltura = document.querySelector(".caja-altura");
const cajaPeso = document.querySelector(".caja-peso");
const botonCalcularIMC = document.querySelector(".boton-calcular-imc");
const seccionResultado = document.querySelector(".resultado");
const cajaResultado = document.querySelector(".caja-resultado");
const spanIMC = document.querySelector(".span-imc");


//Variables que almacenan la info del usuario:
let sexoIMC;
let edadIMC;
let alturaIMC;
let pesoIMC;
let resultadoIMC;

/*Eventos al hacer click: */
botonHombre.addEventListener("click", cambiarColorHombre);
botonMujer.addEventListener("click", cambiarColorMujer);
botonCalcularIMC.addEventListener("click", calcular);

//------------------FUNCIONES-----------------------------------: 

/*Al hacer click en uno de los botones, éste cambiará al
color de su género, y el otro botón, si es que ya tiene el
color de su género, cambiara a gris.
También le asigna valor a la variable "sexoIMC": */
function cambiarColorHombre(){
    botonHombre.style.backgroundColor="#0DCAF0"; //Celeste
    botonMujer.style.backgroundColor="#6C757D"; //Gris
    sexoIMC = "Hombre"; //Agrega la info a la variable 
}

function cambiarColorMujer(){
    botonMujer.style.backgroundColor="rgb(255, 59, 92)"; //Rosa
    botonHombre.style.backgroundColor="#6C757D"; //Gris
    sexoIMC = "Mujer"; //Agrega la info a la variable
}

function calcular(){
    cargarDatos();
    realizarCalculos();
    mostrarIMC();
}

function cargarDatos(){
    edadIMC = cajaEdad.value;
    alturaIMC = cajaAltura.value;
    pesoIMC  = cajaPeso.value;      
}

function realizarCalculos(){
    let alturaAMetros = alturaIMC / 100;    
    //Es IMPORTANTE recortar decimales antes de realizar el cálculo:
    resultadoIMC = (pesoIMC / (alturaAMetros ** 2)).toFixed(1); 
}

//Insertar resultado en caja con etiqueta "span":
function mostrarIMC(){
    if(resultadoIMC <= 15){
        cajaResultado.style.backgroundColor="#006afe";
        spanIMC.style.color="white";
    }
    else if(resultadoIMC > 15 && resultadoIMC <= 15.9){
        cajaResultado.style.backgroundColor="#00bbff";
        spanIMC.style.color="white";
    }
    else if(resultadoIMC >= 16 && resultadoIMC <= 18.4){
        cajaResultado.style.backgroundColor="#00ffff";
        spanIMC.style.color="black";
    }
    else if(resultadoIMC >= 18.5 && resultadoIMC <= 24.9){
        cajaResultado.style.backgroundColor="#00ff01";
        spanIMC.style.color="black";
    }
    else if(resultadoIMC >= 25 && resultadoIMC <= 29.9){
        cajaResultado.style.backgroundColor="#ffff00";
        spanIMC.style.color="black";
    }
    else if(resultadoIMC >= 30 && resultadoIMC <= 34.9){
        cajaResultado.style.backgroundColor="#ffbe00";
        spanIMC.style.color="black";
    }
    else if(resultadoIMC >= 35 && resultadoIMC <= 39.9){
        cajaResultado.style.backgroundColor="#ff7300";
        spanIMC.style.color="black";
    }
    else{
        cajaResultado.style.backgroundColor="#fe0000";
        spanIMC.style.color="gold";
    }
    spanIMC.innerHTML = resultadoIMC;
    seccionResultado.style.display="block";    
}