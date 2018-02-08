# WinRussia # 
### Versión 1.0
<img src=assets/images/logo-horizontal.png>


## Tabla de Contenido
1. [Descripción de producto](#descripcion)
2. [Descripción funcional](#descripcion-func)
	1. [Navegación](#navegacion)
3. [Bases del producto](#bases)
4. [Planeación ](#planeacion)
5. [Sketching de Vistas](#sketching)
    1. [Login](#sketch-login)
6. [Vistas wireframes](#wireframes)
    1. [Login](#login)



## <a name="descripcion"></a> Descripción de producto:
- WinRussia es una app móvil dedicada al Mundial de fútbol de Rusia 2018 referente a los partidos en la misma aplicación.
- Con esta app, el usuario tendrá a su disposición lo siguiente:
	- Posibilidad de apuestas directamente de la aplicación 
	- Información acerca de las fases de todo el mundial.
	- Estadísticas generales por selección participante.
	- Espacio de entretenimiento por medio de un simulador tipo "pulpo Paul" con respuestas de Si/No arbitrarias a la cualquier pregunta qque el usuario ingrese.
	- Espacio de perfil de usuario con la opción de iniciar sesión por medio de Facebook o Google y donde podrá ver sus preferencias de equipos y apuestas hechas.


## <a name="descripcion-func"></a> Descripción funcional: 

- Interfaz intuitiva y de flujo sencillo para el usuario dividida en las siguientes vistas por medio de tabs:
	- Feed principal: Visualización de horarios de partidos.
	- Sección para ver "Mis apuestas"
	- Sección para estadísticas de partidos y jugadores.
	- Un lugar de pronosticos aleatorios para entretenimiento (Pulpo Paul). 
	- Sección para configuracion de preferencias de la app y el perfil.
	- Acceso a la app a través de Google y/o Facebook.   
	- Uso de APIs.
	- Términos y condiciones. 

- <a name="navegacion"></a> Acerca de la navegación:
	- **Navegación No Lineal**: Uso de tabs para facilitar la navegación del usuario para que sea consistente y facilmente identificable y que pueda saltar de una sección a otra.
	- Arquitectura de la información simple y clara para que el usuario pueda encontrar con facilidad lo que necesita.


## <a name="bases"></a> Base del producto:

Realizando un sondeo entre conocidos y amigos notamos que una forma a la que las personas más recurren para esparcimiento es el uso de aplicaciones móviles, los deportes y las apuestas. Por lo que surgió la idea de conjuntar estas 3 opciones en un producto: WinRussia, como una alternativa de producto digital innovador y entretenido. Una aplicación móvil para realizar apuestas sobre los partidos que se disputarán en la siguiente copa mundial de fútbol.

- Versión 1.0:

    - WinRussia es una aplicación móvil de apuestas sobre el Mundial de Rusia 2018. 






## <a name="planeacion"></a> Planeación: 

Se utilizó plataforma de Trello para realizar la organización de tiempos y actividades. 

Liga del tablero: [Aquí](https://trello.com/b/tEWFmgOW/principal-board)  

![TrelloView](/assets/images/trello.png)

Atenidendo a las fortalezas de cada una se realizó la siguiente división de trabajo:

* UX Desing: Ana Laura y Andrea 
* Front-End: Lili y Jimena

Sin embargo cabe aclarar que todas hemos contribuido de una u otra forma todas las tareas. 

## <a name="sketching"></a> Sketching ##

- Views: 

	- Splash.
	- Inicio de sesión.

1.  <a name="sketch-login"></a>**Sketch Login**
    <img src=assets/images/Sketches/sketch-login.png>

	- Sección principal con menú deslizable de tabs: 
		- Partidos:
			- Esta sección cuenta de un menú fijo del lado izquierdo con los grupos y las etapas de avance del torneo. 
			- En el espacio designado podemos visualizar los partidos del grupo o etapa seleccionado. 
			- Al pulsar en el partido seleccionado, se despliega un toggle con la innformación del partido (Estadio/Ciudad/Fecha/hora) y además cuenta ocn un input para ingreso de monto a apostar, botón de CTA para fijar la apuesta.   
		- Mis apuestas: 
			- En este apartado se muestran las últimas apuestas realizadas y sus resultados. 
		- Estadísticas (API datos mundial pasado). 
		- Pulpo Paul: 
			- Se ingresan los datos de un partido, pulsar el boton de envío se despliega un gif con el resultado (ÄPI de juego YES/NO/MAYBE).  
	-Menú desplegable: 
		- Perfil. 
		- Configuración.
		- Datos de pago. 
			- Formulario de datos requeridos.
			- Validación (API Visa).
			- Una vez validados los datos del usuario se guardan y se muestran, atendiendo a medidas de seguridad. 
		- Ayuda: 
			- Un encabezado de preguntas frecuentes, preguntas frecuentes y sus respuestas, encabezado de Contacto, datos de contacto.
		- Términos y condiciones.
		- Logout.



- Se utilizó plataforma de Trello para realizar la organización de tiempos y actividades
- Utilización de Git Colaborativo.


## <a name="sketching"></a> Sketching y descripciones ##
1.  <a name="sketch-login"></a>**Sketch Login**
    - <img src=assets/images/Sketches/sketch-login.png>

2.  <a name="sketch-login"></a>**Sketch Feed**
    - <img src=assets/images/Sketches/sketch-feed.png>

## <a name="wireframes"></a> Vistas wireframes Definitivos
- <a name="login"></a>**Login**
    - <img src=assets/images/---->
