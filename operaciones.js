import fs from 'fs/promises';

const archivoCitas = "./citas.json";

export async function registrar(nombre, edad, animal, color, enfermedad) {
    try {
        const data = await fs.readFile(archivoCitas, "utf-8");
        const citas = JSON.parse(data);
        const cita = { nombre, edad, animal, color, enfermedad };
        citas.push(cita);

        await fs.writeFile(archivoCitas, JSON.stringify(citas, null, 2));
        console.log("Cita registrada con éxito.");
    } catch (error) {
        console.error("Error al registrar la cita:", error.message);
    }
}

export async function leer() {
    try {
        const data = await fs.readFile(archivoCitas, "utf-8");
        const citas = JSON.parse(data);

        for (const cita of citas) {
            console.log(cita);
        }
    } catch (error) {
        console.error("Error al leer las citas:", error.message);
    }
}
