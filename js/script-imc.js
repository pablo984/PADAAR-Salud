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
const spanMensajeIMC = document.querySelector(".mensaje-imc");
const botonReset = document.querySelector(".boton-reset");


//Siluetas de hombres:
const delgadezMuySeveraH = document.querySelector(".delgadez-muy-severa");
const delgadezSeveraH = document.querySelector(".delgadez-severa");
const delgadezH = document.querySelector(".delgadez");
const saludableH = document.querySelector(".saludable");
const sobrepesoH = document.querySelector(".sobrepeso");
const obesidadModeradaH = document.querySelector(".obesidad-moderada");
const obesidadSeveraH = document.querySelector(".obesidad-severa");
const obesidadMorbidaH = document.querySelector(".obesidad-morbida");

//Siluetas de mujeres:
const delgadezMuySeveraM = document.querySelector(".delgadez-muy-severa-M");
const delgadezSeveraM = document.querySelector(".delgadez-severa-M");
const delgadezM = document.querySelector(".delgadez-M");
const saludableM = document.querySelector(".saludable-M");
const sobrepesoM = document.querySelector(".sobrepeso-M");
const obesidadModeradaM = document.querySelector(".obesidad-moderada-M");
const obesidadSeveraM = document.querySelector(".obesidad-severa-M");
const obesidadMorbidaM = document.querySelector(".obesidad-morbida-M");


//Variables que almacenan la info del usuario:
let sexoIMC;
let edadIMC;
let alturaIMC;
let pesoIMC;
let resultadoIMC;

//Variables que contienen la información del IMC:
let delgadezMuySevera = "Delgadez muy severa";

/*Eventos al hacer click: */
botonHombre.addEventListener("click", cambiarColorHombre);
botonMujer.addEventListener("click", cambiarColorMujer);
botonCalcularIMC.addEventListener("click", calcular);
botonReset.addEventListener("click", reiniciar);

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
    //Hombres:
    if((resultadoIMC <= 15) && (sexoIMC == "Hombre")){
        spanMensajeIMC.style.color = "#006afe";        
        spanMensajeIMC.innerHTML = "Delgadez muy severa"
        spanMensajeIMC.style.backgroundColor = "#9ECBF7";
        delgadezMuySeveraH.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC > 15 && resultadoIMC <= 15.9) && (sexoIMC == "Hombre")){
        spanMensajeIMC.style.color = "#00bbff";
        spanMensajeIMC.innerHTML = "Delgadez severa";
        spanMensajeIMC.style.backgroundColor = "#FFBB00";
        delgadezSeveraH.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC >= 16 && resultadoIMC <= 18.4) && (sexoIMC == "Hombre")){
        spanMensajeIMC.style.color = "#00ffff";
        spanMensajeIMC.innerHTML = "Delgadez";
        spanMensajeIMC.style.backgroundColor = "black";
        delgadezH.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC >= 18.5 && resultadoIMC <= 24.9) && (sexoIMC == "Hombre")){
        spanMensajeIMC.style.color = "#00ff01";
        spanMensajeIMC.innerHTML = "Peso saludable";
        spanMensajeIMC.style.backgroundColor = "#FF00FF";
        saludableH.style.display = "block";
        mostrarResultado();        
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC >= 25 && resultadoIMC <= 29.9) && (sexoIMC == "Hombre")){
        spanMensajeIMC.style.color = "#ffff00";
        spanMensajeIMC.innerHTML = "Sobrepeso";
        spanMensajeIMC.style.backgroundColor = "black";
        sobrepesoH.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC >= 30 && resultadoIMC <= 34.9) && (sexoIMC == "Hombre")){
        spanMensajeIMC.style.color = "#ffbe00";
        spanMensajeIMC.innerHTML = "Obesidad moderada";
        spanMensajeIMC.style.backgroundColor = "#3C4D5E";
        obesidadModeradaH.style.display ="block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC >= 35 && resultadoIMC <= 39.9) && (sexoIMC == "Hombre")){
        spanMensajeIMC.style.color = "#ff7300";
        spanMensajeIMC.innerHTML = "Obesidad severa!"
        spanMensajeIMC.style.backgroundColor = "#0000ff";
        obesidadSeveraH.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if (resultadoIMC > 39.9 && sexoIMC == "Hombre"){
        spanMensajeIMC.style.color = "#fe0000";
        spanMensajeIMC.innerHTML = "Obesidad mórbida!";
        spanMensajeIMC.style.backgroundColor = "#00fe00";
        obesidadMorbidaH.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    //Mujeres:
    else if((resultadoIMC <= 15) && (sexoIMC == "Mujer")){
        spanMensajeIMC.style.color = "#006afe";
        spanMensajeIMC.innerHTML = "Delgadez muy severa"
        spanMensajeIMC.style.backgroundColor = "#9ECBF7";
        delgadezMuySeveraM.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC > 15 && resultadoIMC <= 15.9) && (sexoIMC == "Mujer")){
        spanMensajeIMC.style.color = "#00bbff";
        spanMensajeIMC.innerHTML = "Delgadez severa";
        spanMensajeIMC.style.backgroundColor = "#FFBB00";
        delgadezSeveraM.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC >= 16 && resultadoIMC <= 18.4) && (sexoIMC == "Mujer")){
        spanMensajeIMC.style.color = "#00ffff";
        spanMensajeIMC.innerHTML = "Delgadez";
        spanMensajeIMC.style.backgroundColor = "black";
        delgadezM.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC >= 18.5 && resultadoIMC <= 24.9) && (sexoIMC == "Mujer")){
        spanMensajeIMC.style.color = "#00ff01";
        spanMensajeIMC.innerHTML = "Peso saludable";
        spanMensajeIMC.style.backgroundColor = "#FF00FF";
        saludableM.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC >= 25 && resultadoIMC <= 29.9) && (sexoIMC == "Mujer")){
        spanMensajeIMC.style.color = "#ffff00";
        spanMensajeIMC.innerHTML = "Sobrepeso";
        spanMensajeIMC.style.backgroundColor = "black";
        sobrepesoM.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC >= 30 && resultadoIMC <= 34.9) && (sexoIMC == "Mujer")){
        spanMensajeIMC.style.color = "#ffbe00";
        spanMensajeIMC.innerHTML = "Obesidad moderada";
        spanMensajeIMC.style.backgroundColor = "#3C4D5E";
        obesidadModeradaM.style.display ="block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if((resultadoIMC >= 35 && resultadoIMC <= 39.9) && (sexoIMC == "Mujer")){
        spanMensajeIMC.style.color = "#ff7300";
        spanMensajeIMC.innerHTML = "Obesidad severa!"
        spanMensajeIMC.style.backgroundColor = "#0000ff";
        obesidadSeveraM.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else if (resultadoIMC > 39.9 && sexoIMC == "Mujer"){
        spanMensajeIMC.style.color = "#fe0000";
        spanMensajeIMC.innerHTML = "Obesidad mórbida!";
        spanMensajeIMC.style.backgroundColor = "#00fe00";
        obesidadMorbidaM.style.display = "block";
        mostrarResultado();
        botonCalcularIMC.disabled = true;
    }
    else{
        alert("Debe seleccionar su sexo");
    } 
}

function mostrarResultado(){
    spanIMC.innerHTML = resultadoIMC;
    seccionResultado.style.display="block";
}


function reiniciar(){
    location.reload();
}