HTTP & CSS Sandbox
===

La idea es poder utilizar este proyecto junto a las clases de HTML y CSS para
ver las diferentes maneras que hay para construir una página web.

El proyecto esta formado por un servidor basado en `express.js` que sirve
assets estaticos desde el directorio `/static/`. Además, a cada request le 
agrega un pequeño script, que actualiza la página cuando se produce un cambio
en el codigo fuente.

Instalación
---

Clonar el proyecto localmente. Acceder a la carpeta raiz del proyecto e 
instalar las dependencias utilizando el comando:

```
yarn install
```

Luego podemos correr el servidor utilizando el comando:

```
yarn serve
```

Se lanzara un servidor web que estará escuchando requests en el puerto 3000.
Para acceder a la página principal diriga su explorador al siguiente sitio:

```
http://localhost:3000
```

En esta página encontrara un link que lo dirigira al `sandbox`. Este no es más
que un documento html denominado `sandbox.html` encontrado dentro de la carpeta
`static`. Las modificaciones realizadas sobre este archivo serán inmediatamente
replicadas en el explorados.
