# WinRussia # 
### V1.0.0
<img src=assets/images/logo-horizontal.png>


## Tabla de Contenido
1. [Descripción de producto](#descripcion)
2. [Descripción funcional](#descripcion-func)
	1. [Navegación](#navegacion)
3. [Fundamentos del producto](#fundamentos)
	1. [Usuario objetivo](#usuario)
	2. [Research](#research)
	3. [Problemas a resolver para el usuario](#problemas)
4. [Planeación ](#planeacion)


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


## <a name="fundamentos"></a> Fundamentos del producto:

- ## <a name="usuario"></a> Usuario Objetivo:
	- Hombres y mujeres a partir de 18 años.
	- Interesados en los deportes y pronosticos.
	- Gustan de apostar.


- ## <a name="research"></a> Research:
	- Herramienta utilizada: Entrevista a profundidad a 6 personas con el perfil 
	- Datos recabados que fundamentan el producto:
		-Los usuarios potenciales ya tiene experiencia en apostar, sin embargo, lo hacen primordialmente con eventos deportivos grandes.
		-Para realiza sus apuestas suelen utilizar sitios que solo pueden ver en versión escritorio, lo que les hace dar mas pasos para poder apostar.
		-Muchos de ellos utilizan y saben de estadisticas generales del evento al que apuestan, por lo que les es muy necesario tener esta información.

- ### <a name="problemas"></a> Problemas a Resolver para el usuarios:
	- Facilitar al usuario que en el menor numero de pulsaciones, logré llevarlo al sitio de apuestas.
	- Facilidad de manejo de datos de equipos y estadisticas para que el usuario la entienda e interactúe con ellas.

## <a name="planeacion"></a> Planeación: 

Utilización de Trello y Git Proyects dentro de repositorio para control de actividades, resolución de issues, control de commits y desarrollo en conjunto.

Liga del tablero de Trello: [Aquí](https://trello.com/b/tEWFmgOW/principal-board)  

![TrelloView](/assets/images/trello.png)

Las tareas, objetivos y milestones de cada etapa del proyecto se definieron por días entre las colaboradoras para agilización de tareas y aprovechamiento de tiempo.


## <a name="sketching"></a> Sketching y Wireframes ##

- *Lista general de todos los views de WinRussia*:
	1. Splash.
	2. Inicio de sesión.
	3. Feed principal
	4. Apuestas
	5. Tabs de pronosticos "Pulpo Paul"
	6. Estadisticas

1. <a name="splash"></a>**Splash**
-	Entrada a la app con splash que incluye el logo de WinRussia.
2. <a name="login"></a>**Login**
    <img src=assets/images/Sketches/sketch-login.png>

	


## <a name="sketching"></a> Sketching y descripciones ##
1.  <a name="sketch-login"></a>**Sketch Login**
    - <img src=assets/images/Sketches/sketch-login.png>
	- Descripción:
		- Inicio de sesión por medio de Facebook o Google para que el usuario logre hacerlo mas fácilmente.

2.  <a name="sketch-login"></a>**Sketch Feed**
    - <img src=assets/images/Sketches/sketch-feed.png>
	- Sección principal con menú deslizable de tabs: 
		- Partidos:
			- Menú fijo del lado izquierdo con los grupos y las etapas de avance del torneo. 
			- Visualización de los partidos del grupo o etapa seleccionados.
			- Despliegue de toggle con información de cada partido (Estadio/Ciudad/Fecha/hora) con input para ingreso de monto a apostar, botón de CTA para fijar la apuesta.   
		- Estadísticas (API datos mundial pasado). 
		- Pulpo Paul: 
			- Se ingresan los datos de un partido, pulsar el boton de envío se despliega un gif con el resultado (ÄPI de juego YES/NO/MAYBE).  
	-Menú desplegable: 
		- Perfil. 
		- Configuración.
		- Datos de pago. 
		- Términos y condiciones.
		- Cerrar Sesión.

