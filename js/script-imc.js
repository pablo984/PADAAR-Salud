//Variables que almacenan la selección del usuario:
const botonHombre = document.querySelector(".boton-hombre");
const botonMujer = document.querySelector(".boton-mujer");
const cajaEdad = document.querySelector(".caja-edad");
const cajaAltura = document.querySelector(".caja-altura");
const cajaPeso = document.querySelector(".caja-peso");
const botonCalcularIMC = document.querySelector(".boton-calcular");
const seccionResultado = document.querySelector(".resultado");
const spanIMC = document.querySelector(".span-imc");
const spanMensajeIMC = document.querySelector(".mensaje-imc");
const mensajeFelicitaciones = document.querySelector(".mensaje-felicitaciones");
const mensajeBajarPeso = document.querySelector(".mensaje-bajar-peso");
const mensajeSubirPeso = document.querySelector(".mensaje-subir-peso");
const spanBajar = document.querySelector(".span-bajar");
const spanSubir = document.querySelector(".span-subir");
const mensajePesoIdealHombre = document.querySelector(".mensaje-peso-ideal-h");
const mensajePesoIdealMujer = document.querySelector(".mensaje-peso-ideal-m");
const spanPesoIdealHombre = document.querySelector(".span-peso-ideal-hombre");
const spanPesoIdealMujer = document.querySelector(".span-peso-ideal-mujer");
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
let sexo = "";
let edad;
let altura;
let peso;
let resultadoIMC;

//Eventos al hacer click: 
botonHombre.addEventListener("click", cambiarColorHombre);
botonMujer.addEventListener("click", cambiarColorMujer);
botonCalcularIMC.addEventListener("click", calcular);
botonReset.addEventListener("click", reiniciar);

//------------------FUNCIONES-----------------------------------: 

/*Al hacer click en uno de los botones, éste cambiará al
color de su género, y el otro botón, si es que ya tiene el
color de su género, cambiara a gris.
También le asigna valor a la variable "sexo": */
function cambiarColorHombre(){
    botonHombre.style.backgroundColor="#0DCAF0"; //Celeste
    botonMujer.style.backgroundColor="#6C757D"; //Gris
    sexo = "Hombre"; //Agrega la info a la variable 
}

function cambiarColorMujer(){
    botonMujer.style.backgroundColor="#FF3B5C"; //Rosa
    botonHombre.style.backgroundColor="#6C757D"; //Gris
    sexo = "Mujer"; //Agrega la info a la variable
}

function calcular(){
    cargarDatos();
    chequearIngresosYCalcular();        
}

function cargarDatos(){
    edad = cajaEdad.value;
    altura = cajaAltura.value;
    peso  = cajaPeso.value;      
}

function chequearIngresosYCalcular(){
    if(sexo == ""){
        alert("Tenés que seleccionar tu género");
        botonHombre.focus();
    }
    else if (edad == ""){
        alert("Tenés que ingresar tu edad");
        cajaEdad.focus();
    }
    else if(altura == ""){
        alert ("Tenés que ingresar tu altura");
        cajaAltura.focus();

    }
    else if(peso == ""){
        alert ("Tenés que ingresar tu peso");
        cajaPeso.focus();
    }
    else{
        realizarCalculos();
        mostrarIMC();   
        calcularPesoMinimoYMaximo();
        calcularPesoIdeal();
    }
}

function realizarCalculos(){
    let alturaAMetros = altura / 100;    
    //Es IMPORTANTE recortar decimales antes de realizar el cálculo:
    resultadoIMC = (peso / (alturaAMetros ** 2)).toFixed(1); 
}

//Insertar resultado en caja con etiqueta "span":
function mostrarIMC(){
    //Hombres:
    if((resultadoIMC <= 15) && (sexo == "Hombre")){
        spanMensajeIMC.style.color = "#006afe";        
        spanMensajeIMC.innerHTML = "Delgadez muy severa"
        spanMensajeIMC.style.backgroundColor = "#9ECBF7";
        delgadezMuySeveraH.style.display = "block";
        mostrarResultado();        
    }
    else if((resultadoIMC > 15 && resultadoIMC <= 15.9) && (sexo == "Hombre")){
        spanMensajeIMC.style.color = "#00bbff";
        spanMensajeIMC.innerHTML = "Delgadez severa";
        spanMensajeIMC.style.backgroundColor = "#FFBB00";
        delgadezSeveraH.style.display = "block";
        mostrarResultado();        
    }
    else if((resultadoIMC >= 16 && resultadoIMC <= 18.4) && (sexo == "Hombre")){
        spanMensajeIMC.style.color = "#00ffff";
        spanMensajeIMC.innerHTML = "Delgadez";
        spanMensajeIMC.style.backgroundColor = "black";
        delgadezH.style.display = "block";
        mostrarResultado();        
    }
    else if((resultadoIMC >= 18.5 && resultadoIMC <= 24.9) && (sexo == "Hombre")){
        spanMensajeIMC.style.color = "#00ff01";
        spanMensajeIMC.innerHTML = "Peso saludable";
        spanMensajeIMC.style.backgroundColor = "#FF00FF";
        saludableH.style.display = "block";
        mostrarResultado();
    }
    else if((resultadoIMC >= 25 && resultadoIMC <= 29.9) && (sexo == "Hombre")){
        spanMensajeIMC.style.color = "#ffff00";
        spanMensajeIMC.innerHTML = "Sobrepeso";
        spanMensajeIMC.style.backgroundColor = "black";
        sobrepesoH.style.display = "block";
        mostrarResultado();        
    }
    else if((resultadoIMC >= 30 && resultadoIMC <= 34.9) && (sexo == "Hombre")){
        spanMensajeIMC.style.color = "#ffbe00";
        spanMensajeIMC.innerHTML = "Obesidad moderada";
        spanMensajeIMC.style.backgroundColor = "#3C4D5E";
        obesidadModeradaH.style.display ="block";
        mostrarResultado();        
    }
    else if((resultadoIMC >= 35 && resultadoIMC <= 39.9) && (sexo == "Hombre")){
        spanMensajeIMC.style.color = "#ff7300";
        spanMensajeIMC.innerHTML = "Obesidad severa!"
        spanMensajeIMC.style.backgroundColor = "#0000ff";
        obesidadSeveraH.style.display = "block";
        mostrarResultado();        
    }
    else if (resultadoIMC > 39.9 && sexo == "Hombre"){
        spanMensajeIMC.style.color = "#fe0000";
        spanMensajeIMC.innerHTML = "Obesidad mórbida!";
        spanMensajeIMC.style.backgroundColor = "#00fe00";
        obesidadMorbidaH.style.display = "block";
        mostrarResultado();        
    }
    //Mujeres:
    else if((resultadoIMC <= 15) && (sexo == "Mujer")){
        spanMensajeIMC.style.color = "#006afe";
        spanMensajeIMC.innerHTML = "Delgadez muy severa"
        spanMensajeIMC.style.backgroundColor = "#9ECBF7";
        delgadezMuySeveraM.style.display = "block";
        mostrarResultado();        
    }
    else if((resultadoIMC > 15 && resultadoIMC <= 15.9) && (sexo == "Mujer")){
        spanMensajeIMC.style.color = "#00bbff";
        spanMensajeIMC.innerHTML = "Delgadez severa";
        spanMensajeIMC.style.backgroundColor = "#FFBB00";
        delgadezSeveraM.style.display = "block";
        mostrarResultado();        
    }
    else if((resultadoIMC >= 16 && resultadoIMC <= 18.4) && (sexo == "Mujer")){
        spanMensajeIMC.style.color = "#00ffff";
        spanMensajeIMC.innerHTML = "Delgadez";
        spanMensajeIMC.style.backgroundColor = "black";
        delgadezM.style.display = "block";
        mostrarResultado();        
    }
    else if((resultadoIMC >= 18.5 && resultadoIMC <= 24.9) && (sexo == "Mujer")){
        spanMensajeIMC.style.color = "#00ff01";
        spanMensajeIMC.innerHTML = "Peso saludable";
        spanMensajeIMC.style.backgroundColor = "#FF00FF";
        saludableM.style.display = "block";
        mostrarResultado();        
    }
    else if((resultadoIMC >= 25 && resultadoIMC <= 29.9) && (sexo == "Mujer")){
        spanMensajeIMC.style.color = "#ffff00";
        spanMensajeIMC.innerHTML = "Sobrepeso";
        spanMensajeIMC.style.backgroundColor = "black";
        sobrepesoM.style.display = "block";
        mostrarResultado();        
    }
    else if((resultadoIMC >= 30 && resultadoIMC <= 34.9) && (sexo == "Mujer")){
        spanMensajeIMC.style.color = "#ffbe00";
        spanMensajeIMC.innerHTML = "Obesidad moderada";
        spanMensajeIMC.style.backgroundColor = "#3C4D5E";
        obesidadModeradaM.style.display ="block";
        mostrarResultado();        
    }
    else if((resultadoIMC >= 35 && resultadoIMC <= 39.9) && (sexo == "Mujer")){
        spanMensajeIMC.style.color = "#ff7300";
        spanMensajeIMC.innerHTML = "Obesidad severa!"
        spanMensajeIMC.style.backgroundColor = "#0000ff";
        obesidadSeveraM.style.display = "block";
        mostrarResultado();        
    }
    else if (resultadoIMC > 39.9 && sexo == "Mujer"){
        spanMensajeIMC.style.color = "#fe0000";
        spanMensajeIMC.innerHTML = "Obesidad mórbida!";
        spanMensajeIMC.style.backgroundColor = "#00fe00";
        obesidadMorbidaM.style.display = "block";
        mostrarResultado();        
    }    
}

function mostrarResultado(){
    spanIMC.innerHTML = resultadoIMC;
    seccionResultado.style.display = "block";
    botonCalcularIMC.disabled = true;
    setTimeout(enfocarResultado, 100); 
}

function enfocarResultado(){
    spanIMC.focus();
}

function calcularPesoMinimoYMaximo(){
    let alturaEnMetros = altura / 100;
    let pesoMinimo = (18.5 * (alturaEnMetros ** 2));
    let pesoMaximo = (24.9 * (alturaEnMetros ** 2));

    if(resultadoIMC >= 25) {
        spanBajar.innerHTML = (peso - pesoMaximo).toFixed(1);
        mensajeBajarPeso.style.display = "block";
        
    }
    else if(resultadoIMC <= 18.4) {
        spanSubir.innerHTML = (pesoMinimo - peso).toFixed(1);
        mensajeSubirPeso.style.display = "block";
    }  
    else{
        mensajeFelicitaciones.style.display = "block";
    }
}

function calcularPesoIdeal(){
    let indiceDeBroca = altura - 100;
    let iBrocaEnhombre = indiceDeBroca - ((indiceDeBroca - 52) * 0.2);
    let iBrocaEnmujer = indiceDeBroca - ((indiceDeBroca - 52) * 0.4);

    if(sexo == "Hombre"){
        spanPesoIdealHombre.innerHTML = iBrocaEnhombre;
        mensajePesoIdealHombre.style.display = "block";
    }
    else{
        spanPesoIdealMujer.innerHTML = iBrocaEnmujer;
        mensajePesoIdealMujer.style.display = "block";
    }
}

function reiniciar(){
    location.reload();
}

