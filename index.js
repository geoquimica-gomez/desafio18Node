import { registrar, leer } from './operaciones.js';

const operacion = process.argv[2];

if (operacion === "registrar") {
    const nombre = process.argv[3];
    const edad = parseInt(process.argv[4]);
    const animal = process.argv[5];
    const color = process.argv[6];
    const enfermedad = process.argv[7];

    await registrar(nombre, edad, animal, color, enfermedad);
}
else if (operacion === "leer") {
    await leer();
}
else {
    console.log("Operación no válida. Las operaciones válidas son 'registrar' y 'leer'.");
}