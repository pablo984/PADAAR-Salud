Proyecto personal contador de calorías y bienestar físico. 

Se usó el "Carousel" de Bootstrap junto con el CDN de JS para dar
el estilo de "Slider" a la página. 

PROBLEMA CON SOLUCIÓN 1: 
* Cree mi propio botón para el menú desplegable. También le hice un 
estilo propio de deslizamiento horizontal de izquierda a derecha
después de muchos intentos, ya que inicialmente quería que el 
desplazamiento sea de derecha a izquierda, pero esto me traía un 
PROBLEMA cuando hacía la transformación de "translateX(100%)" para
que el menú se esconda a la derecha, y el PROBLEMA era que dejaba 
un ESPACIO EN BLANCO a la derecha, haciendo que aparezca la barra para 
el scroll horizontal (muy malo para el responsive). 
Ahora, cuando el menú aparece desde el borde izquierdo hacia la derecha, 
no hay problema, ya que ahora uso "translateX(-100%)" y, al parecer, todo 
lo que esté en negativo no representa un espacio para el "viewport". 

Se ajustaron varias cosas en el index.html para su resultado final:
* Tamaño del menú para las diferentes pantallas. 
* Tamaño del carrusel.
* Se quitó código que estaba de más. 
* Textos animados en pantallas grandes.
* Iconos de redes animados en pantallas grandes. 
* Se achicaron un poco las imágenes en general. 

Actualizaciones al 31/07/23:
* Página de login.
* Página de registro. 
* Decoraciones y correcciones. 
* Diseño de la página de IMC (sin lógica de cálculos aún).
* Arreglos de responsive que quedaban mal. 

PROBLEMA CON SOLUCIÓN 2: 
* En el "index.html" los "h3" cambiaban su tamaño y grosor de fuente porque 
el CDN de Bootstrap lo mofidicaba. Eso lo noté cuando comencé el proyecto
del "imc.html" y vi que al copiar y pegar parte del "footer" del "index.html"
el texto de los "h3" era diferente. Eso pasaba porque no había vinculado el
"imc.html" con el CDN de Bootstrap, sólo había vinculado el "style.css" y el
"style.imc.css".
La solución hubiese sido sencillamente vincular dicho CDN de Bootstrap, pero 
decidí que el texto original queda mejor en el "footer", así que le di estilo
a los "h3" en la parte del "footer" en el "style.css" y los marqué como 
"!important" para que sobreescriba al estilo de Bootstrap. 

PROBLEMA CON SOLUCIÓN 3:
* En JavaScript, en la función "mostrarIMC()" la cual tiene los condicionales 
que evalúan el cálculo del IMC según el peso y la altura y luego los insertan 
en el HTML, tenía el PROBLEMA de que a veces sólo elegía la última condición 
(La del "else") y era porque en la función "realizarCalculos()" NO RECORTABA
los decimales que me arrojaba el cálculo aritmético. Entonces, a veces el 
resultado era un número con muchos decimales después de la coma y, obviamente, 
era distinto a los números a evaluar, los cuales sólo tienen un decimal después
de la coma. 

La SOLUCIÓN: en la función "realizarCalculos()" a la línea que realiza el cálculo
"resultadoIMC = (pesoIMC / (alturaAMetros ** 2))" le RECORTÉ los decimales de la 
siguiente manera: "resultadoIMC = (pesoIMC / (alturaAMetros ** 2)).toFixed(1)".

De esa manera, el código primero calcula el IMC, luego recorta los decimales del 
resultado a sólo 1, y luego compara el resultado con los valores establecidos en 
la función "mostrarIMC()".

CENTRAR HORIZONTALMENTE UN CONTENEDOR HIJO DENTRO DE UN CONTENEDOR PADRE:
* Hijo: 
    margin left: auto;
    margin right: auto;


PROBLEMA CON SOLUCIÓN 4:
* Cuando en el estilizaba la clase "calcular-imc" de la "section" del archivo
  "imc.html" con "display:flex;", "flex-direction:column;" y "align-items:center;"
  tenía un PROBLEMA con el div con clase "peso", el cual su input se achicaba. Esto
  se debía a que "calcular-imc" tenía "align-items:center", lo que hace que sus 
  hijos se centren en el plano horizontal (ya que el flex-direction está en colum), 
  y como su hijo con clase "peso" también tenía "display:flex" con "flex-direction:column" 
  y "align-items:center" hacía que su contenido se ajuste al centro horizontal. 
  Y lo que pasaba, era que el hijo (peso) al centarse en el centro horizontal de 
  su padre, se le achicaba su tamaño y, por ende, también achicaba el tamaño del 
  input que tenía dentro. 
  Cuando al padre "calcular-imc" le quité la propiedad "align-items:center", el hijo
  pasó a tener el mismo ancho que su padre y por consiguiente, el div ahora estaba 
  más grande. Y esa fue la solución para que no se achique tanto el input interno.
  

PROBLEMA CON SOLUCIÓN 5:
* Cuando quería establecer un ancho a un elemento en determinada resolución de pantalla, 
  antes me fijaba en el inspector cuánto medía de ancho dicho contenedor a esa resolución, 
  entonces anotaba el número y lo otorgaba. Por ejemplo:  
  
  A 768px un contenedor medía 622.797px de ancho y me anotaba ese número para colocarlo en
  el "@media". Pero el PROBLEMA estaba en que cuando se llegaba a esa resolución, a pesar de
  haber configurado el "width:622.797px" me decía que media "width:592.797px". 
  
  Lo que no tomaba en cuenta era el "padding" que tenía a los laterales, el cual era de 
  15px x lado. Hice la cuenta de restar 622.797 - 15 - 15 = 592.797 y ahí me di cuenta que no le 
  estaba sumando el padding left y right que le había puesto. 
  Ahora, al número 622.797 le sumé los 30px de padding (15 x lado) dándome un resultado de
  652.797. Ahora funciona perfecto: cuando el ancho de la pantalla llega a 768px, el ancho que 
  toma el contenedor queda fijo en 622.797px. 


PROBLEMA CON SOLUCIÓN 6:
* La función "focus()" sólo funciona en botones y campos de entrada (como "input"). No funciona
  en etiquetas como h1, h2, p, etc.   
  Para que el "focus()" funcione en etiquetas, a la etiqueta que le quiero hacer foco le tengo
  que poner el atributo tabindex="0". El número "0" se utiliza para especificar el orden en el que 
  los elementos reciben el foco cuando se navega mediante la tecla TAB en una página web.
  Un valor positivo (por ejemplo, tabindex="1") establece el orden de foco en función de su valor. 
  Los elementos con valores de tabindex más bajos obtienen el foco primero. 
  Como en mi caso quería enfocar un resultado que estaba oculto, lo puse en "0" porque dicho 
  resultado sólo aparece al presionar el botón "Calcular" y luego, al presionar "Reset" desaparece.

