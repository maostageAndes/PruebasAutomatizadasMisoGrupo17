Herramientas necesarias para el criterio de la semana 5

| Herramienta   |   Versión     |
| ------------- | ------------- |
| Node.js  | 18.20.1 |
| Npm  | 10.5.2  |
| Ghost  | 5.82.0  |
| Kraken  | 3.6.2  |
| Cucumber  | 6.0.7  |
| Cypress  | 13.9.0  |

Configurar tu entorno:

1. Debes tener instalado visual studio code que es donde partimos nosotros para poder ejecutar las pruebas.
2. Para instalarlo ir a la web oficial.
3. Debemos tener en nuestro repositorio local la release con la que se va a ejecutar las pruebas por lo que para ello vamos realizar lo siguiente:
   - Primero: Acceder al repositorio PruebasAutomatizadasMisoGrupo 17.
   - Segundo: hacer click en el botón "code" que esta situado encima de la carpetas a la derecha, adjunto captura:

	![image](https://github.com/maostageAndes/PruebasAutomatizadasMisoGrupo17/assets/166298922/8484b54f-84e4-4d06-b00d-943367ad4db2)

   - Tecero: hacer click en el botón "code" y copiar mediante el botón de la url del archivo en modo HTTPS, te adjunto captura:

     	![image](https://github.com/maostageAndes/PruebasAutomatizadasMisoGrupo17/assets/166298922/c188b468-f1ec-44e9-b790-3e7cb0352e14)
     
   - Cuarto: Acceder a visual studio code, dentro hace clic en la opción del terminal y ejecutar el siguiente comando "git clone url/copiada" desde la raiz donde quereis que se cree.
     
4. Mediante las opciones que tiene visual studio code hacer click en abrir la carpeta desde el sitio donde tenemos guardado el proyecto.
5. Una vez visualizado el proyecto, abrimos la terminal y ejecutamos el siguiente comando para cypres "npx cypress open" o en su lugar npx cypress run.
6. 
	


7. 	

###Instalacion Kraken:###

1. Crear un directorio donde se pueda desplegar kraken.
2. Acceder al directorio.
3. Desde linea de comandos ejecutar los siguientes elementos:
npm init -y
npm install kraken-node
npm install android-platform-tools
npm install appium
npx kraken-node gen

4. Los escenarios se encuentran en la carpeta features/web/support, para la ejecucion de cada uno se debe mover el escenario de esta carpeta hacia la carpeta features. De esa forma, uno por uno. Solo puede haber un archivo de escenario (extensión .features) en la carpeta features. Para la ejecución se utiliza:
npx kraken-node run


###Intalacion Cypress###

1.Instala Node.js: Cypress requiere Node.js para funcionar. Si aún no lo tienes instalado, puedes descargarlo desde el sitio oficial de Node.js1.
2.Instala Visual Studio Code: Si aún no tienes instalado Visual Studio Code, puedes descargarlo desde el sitio oficial de Visual Studio Code1.
3.Crea un nuevo proyecto: Abre Visual Studio Code y crea un nuevo proyecto o abre uno existente2.
4.Abre la terminal integrada: En Visual Studio Code, puedes abrir la terminal integrada desde la barra de menú seleccionando View > Terminal2.
5.Navega al directorio raíz de tu proyecto: En la terminal integrada, utiliza el comando cd para navegar al directorio raíz de tu proyecto2.
6.Instala Cypress: En la terminal integrada, ejecuta el siguiente comando para instalar Cypress como una dependencia de desarrollo en tu proyecto1:

Los archivos de de los 15 escenarios los encontrara en la carpeta e2e.
