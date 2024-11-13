# Veterinaria JS

Esta es una pequeña aplicación de backend en Node.js que permite registrar y leer citas de atención en una veterinaria.

## Descripción

La aplicación permite registrar citas veterinarias con la siguiente información:
- Nombre del animal
- Edad
- Tipo de animal
- Color del animal
- Enfermedad

Estas citas se guardan en un archivo JSON para su posterior consulta.

## Archivos

La aplicación consta de tres archivos principales:

- `index.js`: Archivo principal que permite interactuar con la aplicación.
- `operaciones.js`: Contiene las funciones para registrar y leer citas.
- `citas.json`: Archivo JSON que almacena un arreglo de citas.

## Funcionalidades

1. **Registrar una cita**: Agrega una nueva cita de atención veterinaria.
2. **Leer las citas**: Muestra todas las citas registradas.

## Uso

Para ejecutar la aplicación, usa la línea de comandos:

1. **Registrar una cita**
   ```bash
   node index.js registrar <nombre> <edad> <tipo_animal> <color> <enfermedad>