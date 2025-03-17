// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
    Jose Luis Gonzalez Hernandez
    Alura ONE - Challenge Amigo Secreto
    17/03/2025
*/

let listaAmigos = [];

// Asignar texto a un elemento
function asignarTextoElemento(selector, html) {
    let elementoHTML = document.querySelector(selector);
    elementoHTML.innerHTML = html;
}

// Agregar un amigo a la lista
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();

    // Validar entrada vacia
    if (!amigo) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar si el amigo ya existe
    if (listaAmigos.includes(amigo)) {
        alert("Este amigo ya fue agregado.");
        limpiarCaja();
        return;
    }

    // Agregar amigo a la lista
    listaAmigos.push(amigo);
    console.log(listaAmigos);

    // Actualizar la lista en la pantalla
    mostrarListaAmigos();

    // Limpiar caja de texto
    limpiarCaja();
}

// Mostrar la lista de amigos en pantalla
function mostrarListaAmigos() {
    let listaHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join("");
    asignarTextoElemento("ul", listaHTML);
}

// Sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length < 1) {
        alert("Por favor, inserte al menos un nombre.");
        return;
    }

    // Elegir un amigo al azar
    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    // Mostrar el amigo sorteado en la pantalla
    asignarTextoElemento("ul", `<p>El amigo secreto es: ${amigoSorteado}</p>`);

    // Limpiar la caja de texto
    limpiarCaja();
}

// Limpiar el input de texto (Extra)
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function reiniciarJuego() {
    listaAmigos = [];
    asignarTextoElemento("#listaAmigos", "");
    asignarTextoElemento("#resultado", "");
    document.getElementById("amigo").value = "";
}