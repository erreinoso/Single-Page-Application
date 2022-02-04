# Requerimientos

Necesitamos desarrollar una Single Page Application (SPA) que muestre la información de nuestras imagenes:
  1. Mostrar todas las imagenes con un scroll infinito.
  2. Filtrar el contenido a través de una búsqueda (No es necesario que el resultado sea coherente).
  3. Realizar un like/unlike de cada uno de los items. UI responsive.

# Información

En el momento del desarrollo de la aplicación cliente, el API no se encuentra desarrollada, por
lo que esta incluida una api mock que simula el comportamiento de la API.

Para instalar las dependencias del proyecto:

`npm install`

Para arrancar la api mock simplemente:

- Instalar Mockserver globalmente; o como un módulo NPM:

`npm install mockserver`

- Ejecutar:

`npm run mocks`

`npm start`

## Endpoints

### `GET http://localhost:3100/images`

### `POST http://localhost:3100/images/:id/likes`

Espera un body vacio y respondera con un 204 si todo ha ido correctamente, simula la acción de like.

# Diseño

La visualización de la aplicación cambia dependiendo del dispositivo que se este utilizando.
- En el caso de que se utilice un dispositivo móvil, se debe de mostrar la aplicación siguiendo el diseño mobile.psd.
- En el caso que se utilice una pantalla mayor, se debe de utilizar el diseño web.psd, con un mínimo de 2 columnas y un máximo de 4.

Los diseños se pueden encontrar [aqui](https://www.dropbox.com/sh/r1fp5nz7x046kjt/AACQdbp6bZlv2pNtCN2lTEoEa?dl=0).

Si no dispones de photoshop puedes usar [photopea](https://www.photopea.com/).

# Implementación

- Diseñar e implementar la aplicación usando preferiblemente React.
- HTML y estilos responsive a partir de los PSDs: mobile para móviles y web para Desktop.

Se valorarán los siguientes puntos:
- Tests de la aplicación.
- Usar “BEM methodology”.
- El uso de algún “package manager”.
- El uso de algún “task manager”.

---- Pendiente a mejorar:
Si el fetch no trae datos, no mostrar
