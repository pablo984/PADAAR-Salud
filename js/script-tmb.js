//Variables que almacenan la selección del usuario:
const botonHombre = document.querySelector(".boton-hombre");
const botonMujer = document.querySelector(".boton-mujer");
const cajaEdad = document.querySelector(".caja-edad");
const cajaAltura = document.querySelector(".caja-altura");
const cajaPeso = document.querySelector(".caja-peso");
const botonCalcularTMB = document.querySelector(".boton-calcular");
const seccionResultado = document.querySelector(".resultado");
const spanTMB = document.querySelector(".span-tmb");
const botonReset = document.querySelector(".boton-reset");

//Variables que almacenan la info del usuario:
let sexoTMB = "";
let edadTMB;
let alturaTMB;
let pesoTMB;
let resultadoTMB;

/*Variable que contiene el código para formatear el resultado con puntos
y comas decimales: */
let puntosYComasDecimales = Intl.NumberFormat("de-DE", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

/*Eventos al hacer click: */
botonHombre.addEventListener("click", cambiarColorHombre);
botonMujer.addEventListener("click", cambiarColorMujer);
botonCalcularTMB.addEventListener("click", calcular);
botonReset.addEventListener("click", reiniciar);

//------------------FUNCIONES-----------------------------------: 

/*Al hacer click en uno de los botones, éste cambiará al
color de su género, y el otro botón, si es que ya tiene el
color de su género, cambiara a gris.
También le asigna valor a la variable "sexoIMC": */
function cambiarColorHombre(){
    botonHombre.style.backgroundColor="#0DCAF0"; //Celeste
    botonMujer.style.backgroundColor="#6C757D"; //Gris
    sexoTMB = "Hombre"; //Agrega la info a la variable 
}

function cambiarColorMujer(){
    botonMujer.style.backgroundColor="#FF3B5C"; //Rosa
    botonHombre.style.backgroundColor="#6C757D"; //Gris
    sexoTMB = "Mujer"; //Agrega la info a la variable
}

function calcular(){
    cargarDatos();
    chequearIngresosYCalcular();        
}

function cargarDatos(){
    edadTMB = cajaEdad.value;
    alturaTMB = cajaAltura.value;
    pesoTMB = cajaPeso.value;      
}

function chequearIngresosYCalcular(){
    if(sexoTMB == ""){
        alert("Tenés que seleccionar tu género");
    }
    else if(edadTMB == ""){
        alert("Tenés que ingresar tu edad");
        cajaEdad.focus();
    }
    else if(alturaTMB == ""){
        alert ("Tenés que ingresar tu altura");
        cajaAltura.focus();
    }
    else if(pesoTMB == ""){
        alert ("Tenés que ingresar tu peso");
        cajaPeso.focus();
    }
    else{
        realizarCalculos();
        mostrarTMB();           
    }
}

function realizarCalculos(){
    if(sexoTMB == "Hombre"){
        resultadoTMB = (10 * pesoTMB) + (6.25 * alturaTMB) - (5 * edadTMB) + 5;
    }
    else{
        resultadoTMB = (10 * pesoTMB) + (6.25 * alturaTMB) - (5 * edadTMB) - 161;
    }
}

//Insertar resultado en caja con etiqueta "span":
function mostrarTMB(){
    spanTMB.innerHTML = puntosYComasDecimales.format(resultadoTMB);    
    seccionResultado.style.display = "block";   
    botonCalcularTMB.disabled = true;     
}

function reiniciar(){
    location.reload();
}

