# Traemos el proyecto final a un create-react-app

Nos traemos nuestros componentes del otro proyecto a este

## Instalamos tailwindCSS

Lo instalamos en una dependencia de desarrollo
npm install -D tailwindcss postcss autoprefixer

Inicializamos tailwindCSS
npx tailwindcss init -p

## Instalamos framer-motion

Libreria para animaciones
npm install framer-motion

## Trabajamos con Docker

Instalamos docker desktop

creamos el Dockerfile en nuestra raiz del documento
escribimos esta configuración para que cree nuestra imagen:

 ---------------------------------------------
FROM node:18-alpine /*** Aquí le decimos que cree un contenedor con node versión 18

WORKDIR /app /*** Aquí le decimos como se va a llamar la carpeta en donde esta el proyecto

COPY package*.json ./ /*** Aquí le decimos que copie el package*.json a la raíz

RUN npm install /*** Aquí le decimos que instale todas las dependencias

COPY . . /*** Aquí le decimos que copie todos los archivos tal y como los tenemos

ENV PORT=3000 /*** Creamos una variable de entorno para el puerto 3000

EXPOSE 3000 /*** Le decimos que exponga el puerto 3000 del contenedor para que podamos acceder desde nuestro windows

CMD [ "npm", "start" ] /*** El comando para inicializar el contenedor
 -------------------------------------------------

creamos un archivo .dockerignore y dentro incluimos node_modules para que no lo copie ya que le hemos dicho que instale las dependencias antes así que no lo necesitamos.

Por último tenemos que generar el contenedor con este comando en consola:

docker build -t juangines/leccion-18:1.0 .
La -t crea un tag y es recomendable poner nuestro nombre de usuario/nombre descriptivo del proyecto y luego un . para decirle que es lo que debe hacer.

Activamos el contenedor
docker run -p 4000:3000 juangines/leccion-18:1.0
La -p es para decirle que nosotros usamos el puerto 4000 y en el contenedor se usa el 3000 y el resto es el nombre de la imagen

Lo enviamos al nuestro hub seria como un github pero con las dependencias identicas a las que le hemos especificado en docker
docker push juangines/leccion-18:1.0

Para poder hacer un push de nuestra imagen a dokerhub necesitamos logearnos con este comando
docker login -u username(juangines)
luego nos pedirá la contraseña

NOTA: Cada vez que queramos cambiar el build de producción tenemos que llamar a:
docker build -t juangines/leccion-18:1.0 .
