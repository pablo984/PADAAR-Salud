Proyecto personal contador de calorías y bienestar físico. 

Se usó el "Carousel" de Bootstrap junto con el CDN de JS para dar
el estilo de "Slider" a la página. 

PROBLEMA CON SOLUCIÓN 1: 
Cree mi propio botón para el menú desplegable. También le hice un 
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
En el "index.html" los "h3" cambiaban su tamaño y grosor de fuente porque 
el CDN de Bootstrap lo mofidicaba. Eso lo noté cuando comencé el proyecto
del "imc.html" y vi que al copiar y pegar parte del "footer" del "index.html"
el texto de los "h3" era diferente. Eso pasaba porque no había vinculado el
"imc.html" con el CDN de Bootstrap, sólo había vinculado el "style.css" y el
"style.imc.css".
La solución hubiese sido sencillamente vincular dicho CDN de Bootstrap, pero 
decidí que el texto original queda mejor en el "footer", así que le di estilo
a los "h3" en la parte del "footer" en el "style.css" y los marqué como 
"!important" para que sobreescriba al estilo de Bootstrap. 


