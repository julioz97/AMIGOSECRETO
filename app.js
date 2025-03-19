// Lista donde se guardarán los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Quitamos espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Evitar nombres repetidos
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre); // Agregar nombre al array
    mostrarLista(); // Actualizar la pantalla
    input.value = ""; // Limpiar el input
}

// Función para mostrar los nombres en la pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];

        // Botón para eliminar nombres
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = function () {
            eliminarAmigo(i);
        };

        item.appendChild(botonEliminar);
        lista.appendChild(item);
    }
}

// Función para eliminar un nombre de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar el nombre de la lista
    mostrarLista(); // Actualizar la pantalla
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos dos personas para sortear.");
        return;
    }

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar el resultado anterior

    let copiaAmigos = [...amigos]; // Copia de la lista original
    copiaAmigos.sort(() => Math.random() - 0.5); // Mezclar la lista

    for (let i = 0; i < copiaAmigos.length; i++) {
        let amigo1 = copiaAmigos[i];
        let amigo2 = copiaAmigos[(i + 1) % copiaAmigos.length]; // El último le da al primero

        let resultado = document.createElement("li");
        resultado.textContent = `${amigo1} le regala a ${amigo2}`;
        resultadoLista.appendChild(resultado);
    }
}