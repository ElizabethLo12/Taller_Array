// Arreglo de objetos con los datos de los estudiantes
let estudiantes = [
    { nombre: "Ana Torres", edad: 14, curso: "9A" },
    { nombre: "Mateo Ruiz", edad: 15, curso: "10B" },
    { nombre: "Lucía Gómez", edad: 13, curso: "8A" },
    { nombre: "Samuel Díaz", edad: 16, curso: "11A" },
    { nombre: "Valentina Cruz", edad: 14, curso: "9B" }
];

// Obtener elementos del DOM
let inputBusqueda = document.getElementById("nombreBusqueda");
let contenedorResultado = document.getElementById("resultado");

function buscarEstudiante() {
    // 1. Limpiar espacios sobrantes y convertir el texto ingresado a minúsculas
    let busqueda = inputBusqueda.value.trim().toLowerCase();

    // 2. Validar si el campo está vacío
    if (busqueda === "") {
        alert("Por favor, escriba un nombre para buscar.");
        contenedorResultado.innerHTML = "<p style='color: red;'>El campo de búsqueda está vacío.</p>";
        inputBusqueda.focus();
        return;
    }

    // 3. Buscar el estudiante en el arreglo
    let estudianteEncontrado = null;

    for (let i = 0; i < estudiantes.length; i++) {
        // También convertimos el nombre del arreglo a minúsculas para comparar sin importar mayúsculas
        if (estudiantes[i].nombre.toLowerCase() === busqueda) {
            estudianteEncontrado = estudiantes[i];
            break; // Salimos del ciclo en cuanto lo encontramos
        }
    }

    // 4. Mostrar el resultado correspondiente
    if (estudianteEncontrado !== null) {
        // Si se encontró, mostramos su ficha
        contenedorResultado.innerHTML = `
            <p><strong>¡Estudiante encontrado!</strong></p>
            <ul>
                <li><strong>Nombre:</strong> ${estudianteEncontrado.nombre}</li>
                <li><strong>Edad:</strong> ${estudianteEncontrado.edad} años</li>
                <li><strong>Curso:</strong> ${estudianteEncontrado.curso}</li>
            </ul>
        `;
    } else {
        // Si no hay coincidencia
        contenedorResultado.innerHTML = `<p style='color: orange;'>El estudiante no fue encontrado.</p>`;
    }

    // 5. Limpiar el input para facilitar otra búsqueda rápida
    inputBusqueda.value = "";
    inputBusqueda.focus();
}