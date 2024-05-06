###Instalacion Kraken:###

1. Crear un directorio donde se pueda desplegar kraken.
2. Acceder al directorio.
3. Desde linea de comandos ejecutar los siguientes elementos:
npm init -y
npm install kraken-node
npm install android-platform-tools
npm install appium

4. En el archivo hooks.js incluir las siguientes lineas:
const dns = require("dns");
Before(async function(){
	dns.setDefaultREsultOrder("ipv4first");
});

5. Para ejecutar se utiliza:
npx kraken-node run






###Intalacion Cypress###

1.Instala Node.js: Cypress requiere Node.js para funcionar. Si aún no lo tienes instalado, puedes descargarlo desde el sitio oficial de Node.js1.
2.Instala Visual Studio Code: Si aún no tienes instalado Visual Studio Code, puedes descargarlo desde el sitio oficial de Visual Studio Code1.
3.Crea un nuevo proyecto: Abre Visual Studio Code y crea un nuevo proyecto o abre uno existente2.
4.Abre la terminal integrada: En Visual Studio Code, puedes abrir la terminal integrada desde la barra de menú seleccionando View > Terminal2.
5.Navega al directorio raíz de tu proyecto: En la terminal integrada, utiliza el comando cd para navegar al directorio raíz de tu proyecto2.
6.Instala Cypress: En la terminal integrada, ejecuta el siguiente comando para instalar Cypress como una dependencia de desarrollo en tu proyecto1:

Los archivos de de los 15 escenarios los encontrara en la carpeta e2e.
